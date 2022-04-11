import React from 'react';
import H1 from './H1';
import { SiMaterialdesign, SiDevdotto } from 'react-icons/si';
import { AiFillAppstore } from 'react-icons/ai';
function ServicePage(){
  return(
    <div className='md:py-40 py-10 flex flex-col items-center space-y-6'>
    <H1>Services</H1>
      <p></p>
      <div className='flex flex-wrap max-w-3xl md:justify-between justify-center  gap-y-6'>
      <div className='w-56 h-40 bg-gray-700 p-4 flex flex-col items-center  space-y-6'>
      <SiMaterialdesign className='w-20 h-20'/>
        <span>WEB DESGIN</span>
      </div>
        <div className='w-56 h-40 bg-gray-700 p-4 flex flex-col items-center space-y-6'>
      <SiDevdotto className='w-20 h-20'/>
        <span>WEB DEVPLOPER</span>
      </div>
        <div className='w-56 h-40 bg-gray-700 p-4 flex flex-col items-center space-y-6'>
      <AiFillAppstore className='w-20 h-20'/>
        <span>APP DEVPLOPER</span>
      </div>
        <span className='w-56'></span>
        <span className='w-56'></span>
     </div>
    </div>
      );
}
export default ServicePage;