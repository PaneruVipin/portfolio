import React from 'react';
import Header from './Header';
import { Outlet } from "react-router-dom";
import SideBar from './SideBar';
import { GiHamburgerMenu } from 'react-icons/gi';
import { ImCancelCircle } from 'react-icons/im';
import Photo1 from './ProfilePhoto1.jpg'
function  MainLayout () {
 const [toggleSideBar, setToggleSideBar] =React.useState(false)
  const showSideBar = () =>{
    setToggleSideBar(!toggleSideBar);
  }
  const style={color:'black',}
  return(
   <div className='bg-gray-900 text-white min-h-screen'>
    
     <div className='pt-2 pl-2 '>
       <GiHamburgerMenu onClick={showSideBar} className= ' w-12 h-12 md:hidden bg-indigo-500 rounded-full p-2'/>
     </div>
       {toggleSideBar  
       && <div className='md:hidden flex fixed inset-y-0 inset-x-0 '>
       <SideBar/>
         <div className='bg-gray-300 opacity-75 w-1/2 '><ImCancelCircle className='w-12 h-12 ml-4 bg-indigo-500 rounded-full p-2'  onClick={showSideBar}/></div>
     </div>  }
   <Header/>
     <div>
     <Outlet />
       </div>
   </div> 
  );
}
export default MainLayout;