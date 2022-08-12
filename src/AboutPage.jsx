import React from 'react';
import H1 from './H1';
import PhotoVipin from '/PhotoVipin2.png'
import {  SiMinutemailer} from "react-icons/si";
import {  FiPhoneCall} from "react-icons/fi";
function AboutPage() {
	return (
		<div className="md:pl-20 pl-6 min-h-screen bg-yellow-700 flex flex-col md:flex-row md:justify-evenly md:space-x-20 items-center space-y-6">
			<img src={PhotoVipin}
          className=" w-64 h-64 object-center overflow-visible object-cover  rounded-full" />
			<div className='flex flex-col items-center space-y-2'>
				<H1>About Me</H1>
			<p></p>
        <div className='space-y-2 '>
        <div className='flex items-center'>
     <span className='w-32 inline-block font-bold'>Name :</span>Vipin Paneru
        </div>
        <div className='flex items-center'>
     <span className='w-32 inline-block font-bold'>Date Of Birth :</span>14 january 2003
        </div>
        <div className='flex items-center'>
     <span className='w-32 inline-block font-bold'>Email :</span>
     <a 
     className='rounded-md flex items-center ' 
     href='mailto:paneruvipinbusiness@gmail.com' target='blank'>
      paneruvipinbusiness@gmail.com
      <SiMinutemailer className='animate-bounce w-8 h-8 p-2 rounded-full bg-blue-500'/>
      </a>
        </div>
          <div className='flex items-center'>
     <span className='w-32 inline-block font-bold'>Phone :
     </span><a
     className=' rounded-md flex items-center '
     href='callto:7505471508' target='blank'>
      7505471508
      <FiPhoneCall className='animate-bounce w-8 h-8 p-2 rounded-full bg-blue-500'/>
      </a>
        </div>
        
          <span className='text-yellow-500 font-bold text-lg pt-24 inline-block'>40 </span> Project completed
         </div>
			</div>
		</div>
	);
}
export default AboutPage;
