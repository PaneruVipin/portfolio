import React from 'react';
import H1 from './H1';

function ProjectPage() {
	return (
		<div className=" py-10 flex flex-col items-center space-y-6 min-h-screen bg-yellow-400 md:px-20">
			<H1>Our Projects</H1>
			<p />
			<div className='space-y-20 w-full '>
				<div className='bg-red-500 rounded-md shadow-md'>
				<div className='pl-4 text-black'>
                  <div className='font-bold text-2xl'>FilmCity</div>
				  
				</div>
				<div className='bg-red-500 h-96 w-full  rounded-md shadow-md p-10 overflow-y-scroll space-y-20 '>
				<div className='bg-filmcity-1 bg-green-900 md:h-128 h-40 w-full rounded-md shadow-md bg-contain bg-no-repeat '></div>
				<div className='bg-filmcity-2 bg-green-900  md:h-128 h-40 w-full rounded-md shadow-md bg-contain bg-no-repeat'></div>
			   </div>	
               </div>
			
				<div className='bg-red-500 rounded-md shadow-md'>
				<div className='pl-4 text-black'>
                  <div className='font-bold text-2xl'>Shiksha:Our education site</div>
				</div>
				<div className='bg-red-500 h-96 w-full  rounded-md shadow-md p-10 overflow-y-scroll space-y-20 '>
				<div className='bg-shiksha-1 bg-green-900  md:h-128 h-40 w-full rounded-md shadow-md bg-contain bg-no-repeat bg-center'></div>
				<div className='bg-shiksha-2 bg-green-900  md:h-128 h-40 w-full rounded-md shadow-md bg-contain bg-no-repeat x'></div>
			   </div>	
               </div>
			
				<div className='bg-red-500 rounded-md shadow-md'>
				<div className='pl-4 text-black'>
                  <div className='font-bold text-2xl'>AskJud</div>
				</div>
				<div className='bg-red-500 h-96 w-full  rounded-md shadow-md p-10 overflow-y-scroll space-y-20 '>
				<div className='bg-askjud-1 bg-green-900  md:h-128 h-40 w-full rounded-md shadow-md bg-contain bg-no-repeat bg-center'></div>
				<div className='bg-askjud-2 bg-green-900  md:h-128 h-40 w-full rounded-md shadow-md bg-contain bg-no-repeat bg-center'></div>
				<div className='bg-askjud-3 bg-green-900  md:h-128 h-40 w-full rounded-md shadow-md bg-contain bg-no-repeat bg-center'></div>
			   </div>
			</div>

			<div className='bg-red-500 rounded-md shadow-md'>
				<div className='pl-4 text-black'>
                  <div className='font-bold text-2xl'>RESPONSIVE DESIGN AND OTHER</div>
				</div>
				<div className='bg-red-500 h-96 w-full  rounded-md shadow-md p-10 overflow-y-scroll space-y-20 '>
				<div className='bg-responsive-1 bg-green-900  md:h-128 h-40 w-full rounded-md shadow-md bg-contain bg-no-repeat bg-center'></div>
				<div className='bg-responsive-2 bg-green-900  md:h-128 h-40 w-full rounded-md shadow-md bg-contain bg-no-repeat bg-center'></div>
				<div className='bg-responsive-3 bg-green-900  md:h-128 h-40 w-full rounded-md shadow-md bg-contain bg-no-repeat bg-center'></div>
				<div className='bg-responsive-4 bg-green-900  md:h-128 h-40 w-full rounded-md shadow-md bg-contain bg-no-repeat bg-center'></div>
			   </div>
			</div>

			</div>
      <div className='text-center'>
      <H1>I'm <span className='text-yellow-500 '>Always Available</span></H1>
      <a className='font-bold text-indigo-700' href='callto:7505471508'>Contact me on 7505471508</a>
        </div>
		</div>
	);
}
export default ProjectPage;
