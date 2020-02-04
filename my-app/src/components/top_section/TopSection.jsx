import React from 'react';
import style from './TopSection.module.css';
import { NavLink } from 'react-router-dom';

const TopSection = (props) => {
  return (
    <div className={style.topSection}>
      <div>
        <NavLink to='/'>Головна</NavLink>
      </div>
      <div>
        <NavLink to = '/Lesson'>Урок</NavLink>
     </div>
      <div>
        {props.calculate}
     </div>
    </div>
  )
}

export default TopSection;