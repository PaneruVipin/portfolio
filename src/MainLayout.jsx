import React from 'react';
import Header from './Header';
import { Outlet } from "react-router-dom";
function  MainLayout () {
 
  return(
   <div className=' bg-red-200 text-white '>
    
     <div className='sticky top-0 text-black bg-indigo-200  rounded-md shadow-md '>
   <Header/>
   </div>
     <Outlet />
   </div> 
  );
}
export default MainLayout;