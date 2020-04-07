import React from 'react';
import style from './TopSection.module.css';
import { NavLink } from 'react-router-dom';
import logo from './../images/notepad.png';
import Fade from 'react-reveal/Fade';
import Flip from 'react-reveal/Flip';

const TopSection = (props) => {
  return (
   <div className={style.topSection}>
    <div className = {style.leftSection}>
      <div className = {style.logo}>
      <Fade left> <img src= {logo} alt="logo"/><span> Notepad</span> </Fade> 
      </div>
    </div>
    <div className = {style.rightSection}>
      <div>
        <NavLink  to='/'><Flip left cascade>Головна</Flip></NavLink>
      </div>
      <div>
        <NavLink activeClassName = {style.activeUrl} to = '/Lesson'><Flip left cascade> Урок </Flip></NavLink>
     </div>
     <div>
       <NavLink activeClassName = {style.activeUrl} to = '/NewLessons'><Flip left cascade>Інші вправи </Flip></NavLink>
     </div>
      <div>
      <NavLink activeClassName = {style.activeUrl} to = '/AddWordsForm'><Flip left cascade>Слова</Flip></NavLink>
     </div>
    </div>
  </div>
  )
}

export default TopSection;