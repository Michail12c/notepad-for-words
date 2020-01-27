import React from 'react';
import style from './Menu.module.css';

const Menu = (props) => {
  return (
    <div className = {style.menu}>
      <nav>
        <ul>
          <li><a href="">Почати урок</a></li>
        </ul>
        <ul>
          <li><a href="">Додати нову фразу</a></li>
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