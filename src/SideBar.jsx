import React from 'react'
import Photo1 from './ProfilePhoto1.jpg';
import MyLink from './MyLink';
function SideBar(){
  return(
     <div className='bg-gray-600 text-white flex flex-col items-center space-y-8 pt-10 px-10 text-center pb-6 h-full w-full'>
    <img className='w-40 rounded-full object-cover ' src={Photo1}></img>
     <div className='space-y-4'>
      <MyLink to='home'>Home</MyLink>
      <MyLink to='about'>About</MyLink>
      <MyLink to='service'>Service</MyLink>
      <MyLink to='skill'>Skill</MyLink>
      <MyLink to='project'>Project</MyLink>
      <MyLink to='contact'>Contact</MyLink>
        </div>
      <p>Copyright ©2022 All rights reserved | 
Made with ❤️ at CodeYogi </p>
      </div>
  );
}
export default SideBar;