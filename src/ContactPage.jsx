import React from 'react';
import H1 from './H1';
import { BiPhoneCall } from 'react-icons/bi';
import { SiMinutemailer } from 'react-icons/si';
function ContactPage(){
  const style={color:'red'}
  return(
    <div className=' min-h-screen flex flex-col items-center bg-green-500 space-y-6 '>
    <H1>Contact Me</H1>
      <div className='md:flex  justify-between  space-y-10 md:space-y-0 w-full'>
      <a href='callto:7505471508' target='blank'>
      <div className='flex items-center gap-x-8 rounded-md shadow-md hover:bg-indigo-500 p-4 bg-yellow-400'>
      <BiPhoneCall style={style} className='rounded-full  w-10 h-10'/>
      <div className='flex-col flex '>
      <span>CONTACT NUMBER</span>
        <span>7505471508</span>
        </div>
        </div>
        </a>
        <a href='mailto:paneruvipinbusiness@gmail.com' target='blank'>
      <div className='flex items-center gap-x-8 rounded-md shadow-md hover:bg-indigo-500 p-4 bg-yellow-400'>
      <SiMinutemailer style={style} className='rounded-full   w-10 h-10'/>
      <div className='flex-col flex '>
      <span>EMAIL ADDRESS</span>
        <span>paneruvipinbusiness@gmail.com</span>
        </div>
        </div>
        </a>
         
        <a href='https://wa.me/+919411369310' target='blank'>
      <div className='flex items-center gap-x-8 rounded-md shadow-md hover:bg-indigo-500 p-4 bg-yellow-400'>
      <SiMinutemailer style={style} className='rounded-full   w-10 h-10'/>
      <div className='flex-col flex '>
      <span>WHATSAAP ME</span>
        <span>9411369310</span>
        </div>
        </div>
        </a>
        </div>
      <p className='pt-24 text-center '>Copyright ©2022 All rights reserved | 
Made with<br/> ❤️ at CodeYogi </p>
    </div>
       );
}
export default ContactPage;