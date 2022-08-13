import React from 'react'
import PhotoVipin from '/PhotoVipin2.png'
import MyLink from './MyLink';
function SideBar(props){
  return(
     <div className='bg-gray-600 text-white flex flex-col items-center space-y-8 pt-10 px-10 text-center pb-6 h-full w-full'>
    <img className='w-40 rounded-full object-cover ' src={PhotoVipin}></img>
     <div className='space-y-4'>
      <MyLink onClick={props.cancel} to='home'>Home</MyLink>
      <MyLink onClick={props.cancel} to='about'>About</MyLink>
      <MyLink onClick={props.cancel} to='skills'>SkillS</MyLink>
      <MyLink onClick={props.cancel} to='project'>Project</MyLink>
      <MyLink onClick={props.cancel} to='contact'>Contact</MyLink>
        </div>
      <p>Copyright ©2022 All rights reserved | 
Made with ❤️ at CodeYogi </p>
      </div>
  );
}
export default SideBar;