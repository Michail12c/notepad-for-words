import React from 'react';
import style from './Lesson.module.css';
import { InteractionWithLocalStorage } from '../common/handlers';
import Card from '../card/Card';
import photo from './../images/sunset.jpg';

const Lesson = ({ content, addWordsThunkTwoList, initializeMain, listWordsTwo }) => {

  return (
  <div className={style.lesson}>
     <div className = {style.topSection}>
       <div>
         logo
        </div>
        <div>
          calculate
        </div>
     </div>
    <div className = {style.wrapper}>
     <div className = {style.leftSide}>
      Lesson
      </div>
      <div className = {style.card}>
        <Card content={content}
          addWordsThunkTwoList={addWordsThunkTwoList}
          initializeMain={initializeMain}
          listWordsTwo={listWordsTwo}
        />
      </div>
      <div className = {style.rightSide}>
       Settings
      </div>
      </div> 
    </div>
  )
}

export default Lesson;