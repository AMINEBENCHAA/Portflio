import 'tailwindcss/tailwind.css';
import 'daisyui/dist/full.css';
import Alien from '../assets/Alien.svg'; 
import { useState } from 'react';

function Topbar() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

    const items:Array<string> = ["Home", "About","Projects","Skills", "Contact"];
  return (
    <header className="fixed  top-0 backdrop-blur-sm z-40 text-lighttext  py-2 px-4 space-x-80 flex  items-center">
    
      <div className='flex font-bold '>
      <img src={Alien} alt="Alien" className="w-10 h-10 inline-block mr-2" />
      <p className='pt-2'>AMINE</p>
      </div>
      <div className="hidden md:block">
    <ul className="flex space-x-28 ">
        {items.map((item) => (
      <li className="ml-4">
        <a href ={`#${item}`} className=" hover:text-mauve  font-bold delay-100 ">
          {item}
        </a>
      </li>))}
      
    </ul></div>
     <div className="md:hidden">
                <button onClick={toggleMenu} className="text-gray-400 hover:text-white focus:outline-none focus:text-white">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
     </div>
              <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden`}>
       </div>

  </header>
  );
}





export default Topbar;
