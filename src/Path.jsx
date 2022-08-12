import React from 'react';
import ContactPage from './ContactPage';
import SkillPage from './SkillPage';
import ProjectPage from './ProjectPage';
import AboutPage from './AboutPage';
import MainLayout from './MainLayout';
import HomePage from './HomePage';
import { Routes, Route } from "react-router-dom";
function Path(){
  return(
      <Routes>
       <Route path='/' element={<MainLayout/>}>
      <Route index element={<HomePage/>}/>
      <Route path='home' element={<HomePage/>}/>
      <Route path='about' element={<AboutPage/>}/>
      <Route path='skills' element={<SkillPage/>}/>
      <Route path='project' element={<ProjectPage/>}/>
      <Route path='contact' element={<ContactPage/>}/>
        </Route>
    </Routes>
  );
}
export default Path;