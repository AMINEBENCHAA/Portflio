import ESIHUB from '../assets/projects/ESIHUB.png';
import chronos from '../assets/projects/CHRONOS.png';
import innovium from '../assets/projects/innoviumLogin.png';
import "../App.css"
import ecom from '../assets/projects/ecom.png'
import { useState } from 'react';

function ProjectsLayout(){

  
  const [isOpened, setIsOpened] = useState(false);
  const [openID, setOpenID] = useState(null);
    const projects:Array<any> = [
{"name":"Innovium",
"image":innovium
,"description":"A platform for the students with innovative ideas to share their projects and ideas.",
"tag":"All",
"tech":["svelte","nestJs"]}
,{"name":"ESI-HUB",
"image":ESIHUB
,"description":"A platform for the students of the Higher School of Computer Science of Sidi Bel Abbesto share their projects and ideas.",
"tag":"All"
,"tech":["react","expressJs"]
}
,{"name":"Chronos",
"image":chronos
,"description":"A quizzs Platform that help students to learn history with fun , with the principe of educative gaming .",
"tag":"Front"
,"tech":["svelte"]}
,{"name":"E-Store",
"image":ecom
,"description":"An E-Com platform that  enables the commercial process of buying and selling from home ",
"tag":"Back"
,"tech":["expressJs","mongodb"]
}

    ];
const[checked,setChecked]=useState("All")


    return(
<div id="Projects" className="App-Frame ">
<div className="flex flex-col absolute l justify-center mt-36 w-[100%] ">

<h2 className="text-4xl font-bold mb-8 text-center text-lighttext2 ">
Explore a collection of my favorite projects
        </h2>
        <div className="join justify-center bg-white">
  <input className="join-item btn bg-slate-100 text-black hover:bg-slate-200 hover:border-transparent border-white w-[8%]" type="radio" name="All" aria-label="All" checked={checked=="All"} onClick={()=>setChecked("All")}/>
  <input className="join-item btn bg-slate-100 text-black hover:bg-slate-200 hover:border-transparent border-white w-[8%]" type="radio" name="Front End" aria-label="Front End" checked={checked=="Front"} onClick={()=>setChecked("Front")}/>
  <input className="join-item btn bg-slate-100 text-black  hover:bg-slate-200 hover:border-transparent border-white w-[8%]" type="radio" name="Back End" aria-label="Back End" checked={checked=="Back"} onClick={()=>setChecked("Back")}/>
  
</div>
<div className="ProjectsList flex space-x-12 justify-center mt-8 min-w-full">
{projects.map((project,index) => (
 (project.tag ==checked || checked=="All" || project.tag=="All" ) &&<ProjectView project={project} index={index} isOpened={isOpened} setIsOpened={setIsOpened} setOpenID={setOpenID}/>


))}

</div>
</div>
</div>
    )
}
const ProjectView=({project,index,isOpened, setIsOpened, setOpenID}:any)=>{
  const toggle = () =>{ setIsOpened(!isOpened)}
    if (index%2==0){
    return(
     
    <ProjectCard2 image={project.image} name={project.name} tech={project.tech} description={project.description} isOpened={isOpened}  toggle={toggle}/>)}
    if (index%2==1){
        return(
       
        <ProjectCard1 image={project.image} name={project.name} tech={project.tech} description={project.description} isOpened={isOpened}  toggle={toggle}/>)}

    }


const ProjectCard1 = ({ image, name, description,tech ,isOpened,toggle}:any) => {
  

    return (
    <div onClick={toggle} className={`${isOpened ? 'card w-56  shadow-xl text-center text-justify ho':  'card w-56  shadow-xl text-center text-justify ho'}`}>
  <div className="card-body border-b-4 border-mauve">
    <div className="justify-center flex">
    <h2 className="card-title ">{name}</h2></div>
    <p>{description}</p>
    <div className='flex space-x-2 pt-6'>
    {tech.map((t:any)=>(
    <div className="badge badge-outline p-2">{t}</div>)) }
    </div>
  </div>
  <figure ><img src={image} alt={name} /></figure>
</div>
    );
  };
  
const ProjectCard2 = ({ image, name, description,tech,isOpened,toggle}:any) => {

    return (
    <div onClick={toggle} className={`${isOpened ? 'card w-56  shadow-xl text-center text-justify ho':'card w-56  shadow-xl text-center text-justify'}`}>
        <figure><img src={image} alt={name} /></figure>
  <div className="card-body border-t-4 border-mauve">
    <div className="justify-center flex">
    <h2 className="card-title ">{name}</h2></div>
    <p>{description}</p>
    <div className='flex space-x-2 pt-6 max-w-full'>
    {tech.map((t:any)=>(
    <div className="badge badge-outline p-2">{t}</div>)) }
    </div>
  </div>
  
</div>
    );
  };
export default ProjectsLayout;