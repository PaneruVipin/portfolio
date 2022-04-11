import React from 'react';
import H1 from './H1';
import { SiHtml5, SiJavascript,SiReact } from 'react-icons/si';
import { DiCss3Full } from 'react-icons/di';
import { RiMarkdownLine } from 'react-icons/ri';
function SkillPage(){
  return(
    <div className='md:py-40 py-10 flex flex-col items-center space-y-6'>
    <H1>My Skills</H1>
      <p></p>
       <div className='flex flex-wrap max-w-3xl md:justify-between justify-center  gap-y-6'>
      <div className='w-56 h-40 bg-gray-700 p-4 flex flex-col items-center  space-y-6'>
      <SiHtml5 className='w-20 h-20'/>
        <span>HTML</span>
      </div>
        <div className='w-56 h-40 bg-gray-700 p-4 flex flex-col items-center  space-y-6'>
      <SiJavascript className='w-20 h-20'/>
        <span>JAVASCRIPT</span>
      </div>
        <div className='w-56 h-40 bg-gray-700 p-4 flex flex-col items-center  space-y-6'>
      <DiCss3Full className='w-20 h-20'/>
        <span>CSS</span>
      </div>
         <div className='w-56 h-40 bg-gray-700 p-4 flex flex-col items-center  space-y-6'>
      <SiReact className='w-20 h-20'/>
        <span>REACT</span>
      </div> 
         <div className='w-56 h-40 bg-gray-700 p-4 flex flex-col items-center  space-y-6'>
      <RiMarkdownLine className='w-20 h-20'/>
        <span>MARKDOWN</span>
      </div>
        <span className='w-56'></span>
        <span className='w-56'></span>
     </div>
    </div>
     );
}
export default SkillPage;