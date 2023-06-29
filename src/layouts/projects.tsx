import ESIHUB from '../assets/projects/ESIHUB.png';
import chronos from '../assets/projects/CHRONOS.png';
import innovium from '../assets/projects/innoviumLogin.png';
import "../App.css"
import HorizontalLine from '../shapes/horLine';
import { useState } from 'react';

function ProjectsLayout(){

  
  const [isOpened, setIsOpened] = useState(false);
  const [openID, setOpenID] = useState(null);
    const projects:Array<any> = [
{"name":"Innovium",
"image":innovium
,"description":"A platform for the students with innovative ideas to share their projects and ideas."}
,{"name":"ESI-HUB",
"image":ESIHUB
,"description":"A platform for the students of the Higher School of Computer Science of Sidi Bel Abbesto share their projects and ideas."}
,{"name":"Chronos",
"image":chronos
,"description":"A quizzs Platform that help students to learn history with fun , with the principe of educative gaming ."}
,{"name":"ESI-HUB",
"image":ESIHUB
,"description":"A platform for the students of the Higher School of Computer Science of Sidi Bel Abbesto share their projects and ideas."}

    ];


    return(
<div id="Projects" className="App-Frame ">
<div className="flex flex-col absolute left-[17%] justify-center mt-36 ">

<h2 className="text-4xl font-bold mb-8 text-center text-lighttext2 ">
Explore a collection of my favorite projects
        </h2>
<div className="ProjectsList flex space-x-12 justify-center mt-24">
{projects.map((project,index) => (
 (openID==null ) &&<ProjectView project={project} index={index} isOpened={isOpened} setIsOpened={setIsOpened} setOpenID={setOpenID}/>


))}

</div>
</div>
</div>
    )
}
const ProjectView=({project,index,isOpened, setIsOpened, setOpenID}:any)=>{
  const toggle = () =>{ setIsOpened(!isOpened); setOpenID(0)}
    if (index%2==0){
    return(
     
    <ProjectCard2 image={project.image} name={project.name} description={project.description} isOpened={isOpened}  toggle={toggle}/>)}
    if (index%2==1){
        return(
       
        <ProjectCard1 image={project.image} name={project.name} description={project.description} isOpened={isOpened}  toggle={toggle}/>)}

    }


const ProjectCard1 = ({ image, name, description ,isOpened,toggle}:any) => {
  

    return (
    <div onClick={toggle} className={`${isOpened ? '':  'card w-56 bg-base-100 shadow-xl text-center text-justify ho'}`}>
  <div className="card-body border-b-4 border-mauve">
    <div className="justify-center flex">
    <h2 className="card-title ">{name}</h2></div>
    <p>{description}</p>
  </div>
  <figure ><img src={image} alt={name} /></figure>
</div>
    );
  };
  
const ProjectCard2 = ({ image, name, description ,isOpened,toggle}:any) => {

    return (
    <div onClick={toggle} className={`${isOpened ? '':'card w-56 bg-base-100 shadow-xl text-center text-justify'}`}>
        <figure><img src={image} alt={name} /></figure>
  <div className="card-body border-t-4 border-mauve">
    <div className="justify-center flex">
    <h2 className="card-title ">{name}</h2></div>
    <p>{description}</p>
  </div>
  
</div>
    );
  };
export default ProjectsLayout;