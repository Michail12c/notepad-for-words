import React from 'react';
import style from './Header.module.css';
import logo from './../images/notepad.png'
import { NavLink } from 'react-router-dom';
import Flip from 'react-reveal/Flip';
import Fade from 'react-reveal/Fade';

const Header = (props) => {
  const setScroll = () => {
   window.scrollTo(0, 0);
  }
  return (
   <div className = {style.header}>
     <Fade left>
     <div className = {style.logo}>
       <img src= {logo} alt="logo"/><span>Notepad</span> 
     </div>
     </Fade>
     <div   className = {style.menu}>
        <div className = {style.list} onClick = {setScroll}>
          <div onClick = {() => {props.setStatus(true)}}><Flip left cascade> Меню </Flip></div>
        </div>
     </div>
   </div>
  )
}

export default Header;