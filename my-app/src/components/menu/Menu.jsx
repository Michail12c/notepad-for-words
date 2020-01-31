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
          <li><NavLink to = '/AddWordsForm'>Додати нову фразу</NavLink></li>
        </ul>
        <ul>
          <li><a href="">Вивести свій список</a></li>
        </ul>
        <ul>
          <li><a href="">Налаштування</a></li>
        </ul>
      </nav> 
    </div>
  )
}
export default Menu;