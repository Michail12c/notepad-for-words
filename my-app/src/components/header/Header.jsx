import React from 'react';
import style from './Header.module.css';
import logo from './../images/notepad.png'
import { NavLink } from 'react-router-dom';

const Header = (props) => {
  const setScroll = () => {
   window.scrollTo(0, 0);
  }
  return (
   <div className = {style.header}>
     <div className = {style.logo}>
       <img src= {logo} alt="logo"/><span> Notepad</span> 
     </div>
     <div   className = {style.menu}>
        <div className = {style.list} onClick = {setScroll}>
          <div onClick = {() => {props.setStatus(true)}}> Меню </div>
        </div>
     </div>
   </div>
  )
}

export default Header;