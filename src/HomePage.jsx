import React from 'react';
import Header from './Header';
import H1 from './H1';
function HomePage(){
  return(
    <div>
    <div className='min-h-screen bg_image bg-left md:bg-right '>
      <div className='flex flex-col items-end pt-56 pr-20'>
      <div >
        <span className=' md:text-green-500 font-bold text-lg text-red-500'>Hello </span>
        <H1>I am Vipin<span className='text-yellow-500 mt-0'> Paneru</span></H1>
        <span className='font-bold text-2xl'>I am Web devloper based in India</span>
      <p className='hidden md:block'>Copyright ©2022 All rights reserved<br/> | 
Made with ❤️ at CodeYogi </p>
</div>
</div>
      </div>
      </div>
  );
}
export default HomePage;

/**   */