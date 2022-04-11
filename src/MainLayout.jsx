import React from 'react';
import Header from './Header';
import { Outlet } from "react-router-dom";
import SideBar from './SideBar';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdCancel } from 'react-icons/md';
import Photo1 from './ProfilePhoto1.jpg'
function  MainLayout () {
 const [toggleSideBar, setToggleSideBar] =React.useState(false)
  const showSideBar = () =>{
    setToggleSideBar(!toggleSideBar);
  }
  const style={color:'black'}
  
  return(
   <div className='bg-gray-900 text-white min-h-screen'>
    
     <div className='pt-2 pl-2'>
       <GiHamburgerMenu onClick={showSideBar} className= ' w-6 h-6 md:hidden'/>
     </div>
       {toggleSideBar  
       && <div className='md:hidden flex fixed inset-y-0 inset-x-0 '>
       <SideBar/>
         <div className='bg-gray-300 opacity-75 w-1/2 '><MdCancel className='w-8 h-8 ml-4 ' style={style} onClick={showSideBar}/></div>
     </div>  }
   <Header/>
     <div>
     <Outlet />
       </div>
   </div> 
  );
}
export default MainLayout;