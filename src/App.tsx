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

function App() {
  return (
    <div className=' '>  
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

export default App;