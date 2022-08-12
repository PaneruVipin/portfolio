import React from 'react';
import H1 from './H1';
import MyLink from './MyLink';
function Header(props){
 return(
   <div className="md:flex items-center  justify-around  hidden py-4 rounded-md shadow-md" >
    <H1 secondry>PaneruVipin</H1>
      <div className='flex space-x-4'>
      <MyLink to='home'>Home</MyLink>
      <MyLink to='about'>About</MyLink>
      <MyLink to='skills'>Skills</MyLink>
      <MyLink to='project'>Project</MyLink>
      <MyLink to='contact'>Contact</MyLink>
        </div>
    </div>
   );
}
export default Header;