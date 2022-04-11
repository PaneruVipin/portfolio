import React from 'react';
import H1 from './H1';
import Project1 from './Project1.jpg';
import Project2 from './Project2.jpg';
import Project3 from './Project3.jpg';
import Project4 from './Project4.jpg';
function ProjectPage() {
	return (
		<div className="md:py-40 py-10 flex flex-col items-center space-y-6">
			<H1>Our Projects</H1>
			<p />
			<div className='flex flex-col items-center space-y-20'>
					<img className='md:w-2/3 h-80 ' src={Project1} />
					<img className='md:w-2/3 h-80' src={Project2} />
					<img className='md:w-2/3 h-80' src={Project3} />
					<img className='md:w-2/3 h-80' src={Project4} />
			</div>
      <div className='text-center'>
      <H1>I'm <span className='text-yellow-500 '>Always Available</span></H1>
      <span className='font-bold text-indigo-700'>Contact me on 9411369310</span>
        </div>
		</div>
	);
}
export default ProjectPage;
