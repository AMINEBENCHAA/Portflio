import facebook from "../assets/socials/facebook.svg";
import github from "../assets/socials/github.svg";
import insta from "../assets/socials/insta.svg";
import linkedin from "../assets/socials/linkedin.svg";
import twitter from "../assets/socials/twitter.svg";
import upwork from "../assets/socials/upwork.svg";



function SocialBar() {

const socials = [
    {logo:facebook,link:"https://www.facebook.com/aminebenchaa31"},
    {logo:github,link:"https://github.com/AMINEBENCHAA"},
    {logo:insta,link:"https://www.instagram.com/aminebenchaa/"},
    {logo:linkedin,link:"https://www.linkedin.com/in/benchaa-mohamed-amine-6aa767270"},
    {logo:twitter,link:"https://twitter.com/AMINEBENCHAA"},
    {logo:upwork,link:"https://www.upwork.com/freelancers/~0190a03b5754443dc9"},

]
  return (
    <div className="hidden md:block">
    <div className="social-bar pt-48 space-y-4 flex flex-col fixed  h-screen w-20 items-center">
      {socials.map((item) => (
      
        <SocialCircleCadre Logo={item}/>
        
      ))}
    </div></div>
  )
}


const SocialCircleCadre = ({Logo}:any) => {
    return (
        <a href={Logo.link} >
      <div className="w-12 h-12 dark:bg-white  rounded-full border-dashed hover:ml-4 hover:bg-primary   flex items-center justify-center ">
       <img src={Logo.logo} alt={Logo} className="w-6 h-6 inline-block " />
      </div>
      </a>  
    );
  };

export default SocialBar