import React from 'react';
import style from './TopSection.module.css';
import { NavLink } from 'react-router-dom';
import logo from './../images/notepad.png';

const TopSection = (props) => {
  return (
   <div className={style.topSection}>
    <div className = {style.leftSection}>
      <div className = {style.logo}>
       <img src= {logo} alt="logo"/><span> Notepad</span> 
      </div>
    </div>
    <div className = {style.rightSection}>
      <div>
        <NavLink  to='/'>Головна</NavLink>
      </div>
      <div>
        <NavLink activeClassName = {style.activeUrl} to = '/Lesson'>Урок</NavLink>
     </div>
     <div>
       <NavLink activeClassName = {style.activeUrl} to = '/NewLessons'>Додаткові вправи</NavLink>
     </div>
      <div>
      <NavLink activeClassName = {style.activeUrl} to = '/AddWordsForm'>Налаштування списків</NavLink>
     </div>
    </div>
  </div>
  )
}

export default TopSection;