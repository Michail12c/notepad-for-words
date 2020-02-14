import React from 'react';
import style from './Lesson.module.css';
import { InteractionWithLocalStorage } from '../common/handlers';
import Card from '../card/Card';
import photo from './../images/sunset.jpg';
import { NavLink } from 'react-router-dom';
import TopSection from '../top_section/TopSection';

const Lesson = ({ content, addWordsThunkTwoList, initializeMain, listWordsTwo, listUser }) => {
  return (
  <div className={style.lesson}>
     <TopSection logo = {'logo'} calculate = {'calculate'}/>
    <div className = {style.wrapper}>
     <div className = {style.leftSide}>
      {/* Lesson */}
      </div>
      <div className = {style.card}>
        <Card content={content}
          addWordsThunkTwoList={addWordsThunkTwoList}
          initializeMain={initializeMain}
          listWordsTwo={listWordsTwo}
          listUser = {listUser}
        />
      </div>
      <div className = {style.rightSide}>
       {/* Settings */}
      </div>
      </div> 
    </div>
  )
}

export default Lesson;