import React from 'react';
import style from './Header.module.css';
import logo from './../images/notepad.png'

const Header = (props) => {
  return (
   <div className = {style.header}>
     <div className = {style.logo}>
       <img src= {logo} alt="logo"/> <span>Notepad</span> 
     </div>
     <div   className = {style.menu}>
        <div className = {style.list}>
          <div onClick = {props.setStatus}>Меню</div>
          <div><a href="">Про нас</a></div>
          <div><a href="">Контакти</a></div>
        </div>
     </div>
   </div>
  )
}

export default Header;