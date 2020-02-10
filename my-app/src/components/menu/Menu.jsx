import React from 'react';
import style from './Menu.module.css';
import {NavLink} from 'react-router-dom';

const Menu = (props) => {
  return (
    <div className = {style.menu}>
       <nav>
        <ul>
          <li><NavLink to = '/Lesson'>Почати урок</NavLink></li>
        </ul>
        <ul>
          <li><NavLink to = '/AddWordsForm'>Поповнити сховище слів</NavLink></li>
        </ul>
        <ul>
          <li><NavLink  to = '/AddWordsForm'>Показати сховища</NavLink></li>
        </ul>
        <ul>
          <li><NavLink to = '/Settings'>Налаштування</NavLink></li>
        </ul>
      </nav> 
    </div>
  )
}
export default Menu;