import React from 'react';
import style from './Header.module.css';
import logo from './../images/notepad.png'
import { NavLink } from 'react-router-dom';

const Header = (props) => {
  return (
   <div className = {style.header}>
     <div className = {style.logo}>
       <img src= {logo} alt="logo"/> <span>Notepad</span> 
     </div>
     <div   className = {style.menu}>
        <div className = {style.list}>
          <div onClick = {props.setStatus}><a href ={'#menu'}>Меню</a></div>
          <div><a href = '#aboutUs'>Про нас</a></div>
          <div><a href="#contact">Контакти</a></div>
        </div>
     </div>
   </div>
  )
}

export default Header;