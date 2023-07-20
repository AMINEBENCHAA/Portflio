import './index.css';

import 'daisyui/dist/full.css';
import Topbar from './components/Topbar';
import MainLayout from './layouts/mainLayout';
import IntroLayout from './layouts/introduction';
import ProjectsLayout from './layouts/projects';
import HorizontalLine from './shapes/horLine';
import Skills from './layouts/skills';
import SocialBar from './components/SocialBar';
import Contact from './layouts/contact';
import Footer from './layouts/footer';
import Right from './components/Right';
import { createContext, useContext, useEffect, useState } from 'react';



function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Get the user's preferred color scheme
  useEffect(() => {
    const prefersColorScheme = window.matchMedia('(prefers-color-scheme: dark)');
    setIsDarkMode(prefersColorScheme.matches);
  }, []);
 
  return (
    <div style={light}>  
    <Topbar />
    <SocialBar/>
   
    <MainLayout/>
    <IntroLayout/>
    <ProjectsLayout/>
    <Skills/>
    <Contact/>
    <Footer/>
    <Right/>
    
    </div>
  );
}



 const dark= {
    backgroundColor: 'black',
    color: 'white',
  }
  const light= {
    backgroundColor: 'white',
    color: 'black',
  }

export default App;