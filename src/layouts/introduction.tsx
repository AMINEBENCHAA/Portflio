import Alien from '../assets/Alien.svg';
import circle from '../assets/circle.svg';
import HorizontalLine from '../shapes/horLine';
import amine from '../assets/amine.png';
import "../App.css"

function IntroLayout(){
    return(
<div id="About" className='App-Frame '>
<div className="flex flex-col absolute  justify-center mt-36 ">

<h2 className="text-4xl font-bold mb-8 text-center text-lighttext2 ">
Let me introduce myself
        </h2>
<div className='flex  mt-24'>
<div className=' px-8 h-full min-w-1/4'>
<div className="bg-gradient-to-r from-purple-500 to-blue-500 inline-block rounded-l-full p-2">
<img src={amine} alt="Alien" className="w-52  inline-block ml-8 " /></div>
</div>
<div className="AboutText font-semibold text-3xl w-2/3 text-justify  ">
This is Mohamed Amine Benchaa , a student in the Higher school of computer sciences of Sidi Bel Abbes (ESI SBA). I'm a  Full Stack Web Developer which makes me able to create for regardding to my +2 years experience in this field, I'm also a UI/UX designer, so all my projects are designed and coded by me !
<br/>
<div className='flex justify-center mt-16 space-x-12'>
<a href='/static/cv.pdf'  download><button className="btn btn-outline btn-primary ">Download CV</button></a>
<a href='#Contact'  ><button className="btn btn-outline btn-primary ">Contact Me</button></a>
</div>
</div>
<div className=' px-12 h-full min-w-1/5'>
<img src={circle} alt="circle" className="w-12 top-20 left-12 relative  inline-block mr-2" />

</div></div></div>

</div>

    )
}

export default IntroLayout;