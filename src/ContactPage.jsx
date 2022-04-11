import React from 'react';
import H1 from './H1';
import { BiPhoneCall } from 'react-icons/bi';
import { SiMinutemailer } from 'react-icons/si';
function ContactPage(){
  const style={color:'yellow'}
  return(
    <div className='md:py-40 py-10 flex flex-col items-center md:px-56 space-y-6 '>
    <H1>Contact Me</H1>
      <p></p>
      <div className='flex md:flex-row flex-col justify-around  space-y-10 md:space-y-0 pl-20 w-full'>
      <div className='flex flex-col space-y-2'>
      <BiPhoneCall style={style} className='rounded-full bg-gray-700 p-6 w-32 h-32'/>
      <span>CONTACT NUMBER</span>
        <span>9411369310</span>
        </div>
      <div className='flex flex-col space-y-2 '>
       <SiMinutemailer style={style} className='rounded-full bg-gray-700 p-6 w-32 h-32'/>
        <span>EMAIL ADDRESS</span>
        <span>paneruvipinbusiness@gmail.com</span>
        </div>
        </div>
      <p className='pt-24 text-center '>Copyright ©2022 All rights reserved | 
Made with<br/> ❤️ at CodeYogi </p>
    </div>
       );
}
export default ContactPage;
//SiMinutemailer