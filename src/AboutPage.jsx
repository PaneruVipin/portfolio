import React from 'react';
import H1 from './H1';
import PhotoVipin from './ProfilePhoto1.jpg';
function AboutPage() {
	return (
		<div className="md:pl-20 pl-6 md:py-40 py-10 flex flex-col md:flex-row md:justify-center md:space-x-20 items-center space-y-6">
			<img src={PhotoVipin} className=" w-56 object-cover rounded-full " />
			<div className='flex flex-col items-center space-y-2'>
				<H1>About Me</H1>
			<p></p>
        <div className='space-y-2 '>
        <div>
     <span className='w-32 inline-block font-bold'>Name :</span>Vipin Paneru
        </div>
        <div>
     <span className='w-32 inline-block font-bold'>Date Of Birth :</span>14 january 2003
        </div>
        <div>
     <span className='w-32 inline-block font-bold'>Email :</span>paneruvipinbusiness@gmail.com
        </div>
          <div>
     <span className='w-32 inline-block font-bold'>Phone :</span>9411369310
        </div>
          <span className='text-yellow-500 font-bold text-lg pt-24 inline-block'>40 </span> Project complete
         </div>
			</div>
		</div>
	);
}
export default AboutPage;
