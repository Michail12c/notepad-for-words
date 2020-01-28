import React from 'react';
import style from './Lesson.module.css';
import {InteractionWithLocalStorage } from '../common/handlers';

const Lesson = ({content}) => {
  console.log(content)
  let a = new InteractionWithLocalStorage('word1', 'word2');
  a.createList('word3');
  return(
    <div>
      Lesson
      <div className = {style.card}>
        <div className = {style.content}>
          {content[0].word}
        </div>
        <div className = {style.choiceMenu}>
           <button>Повторити</button>
           <button>Пам`ятаю</button>
        </div>
      </div>
    </div>
  )
}

export default Lesson;