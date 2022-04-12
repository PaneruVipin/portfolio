import React from 'react';
import Header from './Header';
import H1 from './H1';
function HomePage(){
  return(
    <div className='pl-20 bg_image bg-bottom md:bg-right'>
      <div className=' md:py-56 py-20 space-y-10'>
        <span className='text-green-500 font-bold text-lg'>Hello </span>
        <H1>I am Vipin<br/><span className='text-yellow-500'> Paneru</span></H1>
        <span className='font-bold text-2xl'>I am Web devloper based in India</span>
      <p className='hidden md:block'>Copyright ©2022 All rights reserved<br/> | 
Made with ❤️ at CodeYogi </p>
      </div>
      </div>
  );
}
export default HomePage;