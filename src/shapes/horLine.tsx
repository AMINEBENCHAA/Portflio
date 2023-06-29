import circle from '../assets/circle.svg';

const HorizontalLine = ({text}:any) => {
  return (
    <>
    <div className=" flex justify-center font-bold text-4xl px-36 pt-28  text-lighttext2">
    <div className='  '>
<img src={circle} alt="circle" className="w-6    inline-block " />
</div>
<div
className='ml-6'>{text}</div>
     
     
      </div>
      
    </>
  );
};

export default HorizontalLine;
