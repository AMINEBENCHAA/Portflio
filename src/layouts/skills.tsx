import react from '../assets/techs/react.svg';
import css from '../assets/techs/css.svg';
import figma from '../assets/techs/figma.svg';
import html from '../assets/techs/html.svg';
import js from '../assets/techs/js.svg';
import mongodb from '../assets/techs/mongodb.svg';
import nestjs from '../assets/techs/nestjs.svg';
import nodejs from '../assets/techs/nodejs.svg';
import prisma from '../assets/techs/prisma.svg';
import adobe from '../assets/techs/adobe.svg';
import tailwind from '../assets/techs/tailwind.svg';
import ts from '../assets/techs/ts.svg';
import daisy from '../assets/techs/daisy.svg';
import postg from '../assets/techs/postg.svg';
import svelte from '../assets/techs/svelte.svg';
import SocialBar from '../components/SocialBar';
import "../App.css"
import HorizontalLine from '../shapes/horLine';

function Skills() {
const ArrayLogoFull =[
   [{logo:react,name:'React JS'}
    ,{logo:svelte,name:'Svelte JS'},{logo:js,name:'Java Script'},{logo:nodejs,name:'Node Js'}],[{logo:nestjs,name:'Nest JS'},{logo:ts,name:'Type Script'},{logo:html,name:'Html'}],[{logo:css,name:'Css'},{logo:tailwind,name:'Tailwind CSS'},{logo:adobe,name:'Adobe Cloud'},{logo:daisy,name:'Daisy UI'}],[{logo:figma,name:'Figma'},{logo:postg,name:'Postgress DB'},{logo:mongodb,name:'Mongo DB'}]
]
const arraySkills = [{name:"Frontend Development",date:2021},{name:"Backend Development",date:2022},{name:"UI/UX Design",date:2020},{name:"Logo Design",date:2020}]
    return (
    <div id="Skills" className='Skills App-Frame'>
     
    <div className="flex flex-col absolute left-[25%] justify-center ">
    
    <HorizontalLine text="My SKills & Experiences" />
    <div className='flex absolute top-[80%] space-x-16 mt-24'>
    <div className='flex  flex-col left-[20%] justify-center  '>
        <div className=''>
         
            <ArrayCadre ArrayLogo={ArrayLogoFull[0]} />
            </div>

        <div className='ml-16 mt-2 '><ArrayCadre ArrayLogo={ArrayLogoFull[1]} /></div>
        <div className='mt-2'><ArrayCadre ArrayLogo={ArrayLogoFull[2]} /></div>
        <div className='ml-16 mt-2'><ArrayCadre ArrayLogo={ArrayLogoFull[3]} /></div>
       
        </div>
        <div className='flex flex-col left-[20%] max-h-[80%] justify-center space-y-4  '>
         {arraySkills.map((item) => (
        <div className='flex px-28 flex flex-col left-[20%]   '>
       <Skillcard skill={item} />
        </div>))}</div></div>
        </div>
        
    </div>);}


const CircleCadre = ({Logo}:any) => {
    return (
      <div className='justify-center '>
      <div className="w-20 h-20 rounded-full border border-gray-500 flex items-center justify-center ">
       <img src={Logo.logo} alt={Logo.logo} className="w-10 h-10 inline-block " />
      </div>
      <div className='justify-center w-24 font-semibold text-center '>{Logo.name}</div>
      </div>
    );
  };

const ArrayCadre = ({ArrayLogo}:any) => {
    return (
      <div className="flex space-x-8">
    {ArrayLogo.map((item:any) => (
        <CircleCadre Logo={item} />))}
      </div>
    );}


const Skillcard=({skill}:any)=>{
    return(
      <div className="card w-72 h-28 bg-base-100 shadow-xl text-center text-justify">
       <div className="card-body ">
    <div className=" flex">
    <h2 className="card-title ">{skill.name}</h2>
      </div>
      <p>since {skill.date} </p>
    </div>
      </div>
    )
}


export default Skills;