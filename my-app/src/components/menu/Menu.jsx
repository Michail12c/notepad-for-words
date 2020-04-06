import React from 'react';
import style from './Menu.module.css';
import {NavLink} from 'react-router-dom';
import Flip from 'react-reveal/Flip';

const Menu = (props) => {
  return (
    <Flip left>
    <div className = {style.menu}>
       <nav>
        <ul>
          <li><NavLink to = '/Lesson'>Почати урок</NavLink></li>
        </ul>
        <ul>
          <li><NavLink to = '/AddWordsForm'>Поповнити сховище слів</NavLink></li>
        </ul>
        <ul>
          <li><NavLink to ='/NewLessons'>Додаткові вправи</NavLink></li>
        </ul>
        <ul>
          <li><NavLink to = '/Settings'>Налаштування</NavLink></li>
        </ul>
      </nav> 
    </div>
   </Flip> 
  )
}
export default Menu;