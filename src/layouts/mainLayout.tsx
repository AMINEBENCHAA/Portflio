import adobe from '../assets/welcome/adobe.svg'
import hola from '../assets/welcome/hola.svg'
import nest from '../assets/welcome/nest.svg'
import prisma from '../assets/welcome/prisma.svg'
import react from '../assets/welcome/react.svg'
import stack from '../assets/welcome/stack.svg'
import Alien from '../assets/Alien.svg';
import circle from '../assets/circle.svg';
import './welcome.css'

function MainLayout(){
    return(
<div id="Home" className='App-Frame'>
<div className='flex  py-2 min-h-screen  min-w-1/4 justify-center items-center '>
<img src={hola} alt="hola" className="w-auto z-10  inline-block mr-2 absolute top-[12%] left-[22%] hola" />
<img src={react} alt="react" className="w-[5%] z-10  inline-block mr-2 absolute top-24 left-[70%] hola" />
<img src={Alien} alt="Alien" className="w-64  z-20 inline-block mr-2 absolute Alien top-[42%] left-[49%]" />
<img src={stack} alt="stack" className="w-[40%] z-10 inline-block mr-2 absolute  stack top-[47%] left-[13%]" />
<img src={nest} alt="nest" className="w-[7%] z-10  inline-block mr-2 absolute top-[100vh} left-[82%] hola" />
<img src={adobe} alt="adobe" className="w-auto z-10  inline-block mr-2 absolute top-24 left-[22%] hola" />
<img src={prisma} alt="prisma" className="w-auto z-10  inline-block mr-2 absolute top-[80%] left-[80%] hola" />

</div>

</div>

    )
}

export default MainLayout;