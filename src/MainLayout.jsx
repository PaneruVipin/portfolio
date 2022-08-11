import React from 'react';
import Header from './Header';
import { Outlet } from "react-router-dom";
import SideBar from './SideBar';
import { GiHamburgerMenu } from 'react-icons/gi';
import { ImCancelCircle } from 'react-icons/im';
import Photo1 from './ProfilePhoto1.jpg'
function  MainLayout () {
 
  return(
   <div className='bg-gray-300 text-white min-h-screen'>
    
     <div className='fixed inset-x-0 text-black'>
   <Header/>
   </div>
     <Outlet />
   </div> 
  );
}
export default MainLayout;