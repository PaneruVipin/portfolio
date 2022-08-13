import React from 'react';
import H1 from './H1';
function HomePage(){
  return(
    <div 
    className='bg-my-image-1 py-10 px-4 bg-no-repeat bg-bottom md:bg-left bg-contain bg-fixed bg-indigo-700 min-h-screen flex flex-col justify-center items-center'>
      <div>
        <span className=' font-bold text-lg text-red-500'>Hello </span>
        <H1 >I am Vipin<span className='text-yellow-500 mt-0'> Paneru</span></H1>
        <span className='font-bold text-2xl'>I am Web devloper based in India</span>
      <p className='hidden md:block'>Copyright ©2022 All rights reserved<br/> | 
Made with ❤️ at CodeYogi </p>
</div>
</div>
  );
}
export default HomePage;

