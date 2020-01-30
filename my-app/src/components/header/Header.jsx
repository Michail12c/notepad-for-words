import React from 'react';
import style from './Header.module.css';

const Header = (props) => {
  return (
   <div className = {style.header}>
     <div className = {style.logo}>
      logo and slogan
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