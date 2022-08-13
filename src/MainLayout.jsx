import React from 'react';
import Header from './Header';
import { Outlet } from "react-router-dom";
import {GiHamburgerMenu} from 'react-icons/gi'
import { useState } from 'react';
import SideBar from './SideBar';
import {ImCancelCircle} from 'react-icons/im'
function  MainLayout () {
 const [toggleSideBar,setToggleSideBar]=useState(false)
  return(
   <div className='  text-white '>
    <div className='md:hidden w-6 fixed pt-4 pl-2'>
     <GiHamburgerMenu 
   style={{color:'white'}} 
   onClick={()=>setToggleSideBar(!toggleSideBar)}
   className="w-10 h-10 p-2 shadow-md bg-blue-500 rounded-full"
   />
   </div>
     <div className='sticky top-0 text-black bg-indigo-200 hidden md:block rounded-md shadow-md '>
    
   <Header/>
   </div>
 
           {
             toggleSideBar && <div className='h-screen flex fixed justify-between inset-0 md:hidden bg-opacity-25 bg-black'>
              <div className='w-2/3'>
                  <SideBar cancel={()=>setToggleSideBar(!toggleSideBar)}/>
                  </div>
                  <div onClick={()=>setToggleSideBar(!toggleSideBar)} className=' w-1/3'>
                  <ImCancelCircle className='ml-4 mt-2 w-10 h-10'/>
                  </div>
             </div>
           }
   <div>
     <Outlet/>
     </div>
   </div> 
  );
}
export default MainLayout;