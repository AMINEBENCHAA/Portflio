import './index.css';

import 'daisyui/dist/full.css';
import Topbar from './components/Topbar';
import MainLayout from './layouts/mainLayout';
import IntroLayout from './layouts/introduction';
import ProjectsLayout from './layouts/projects';
import Skills from './layouts/skills';
import SocialBar from './components/SocialBar';
import Contact from './layouts/contact';
import Footer from './layouts/footer';
import Right from './components/Right';




function App() {
 

 
 
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


  const light= {
    backgroundColor: 'white',
    color: 'black',
  }

export default App;
