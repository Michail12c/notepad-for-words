import React from 'react';
import style from './Lesson.module.css';
import {InteractionWithLocalStorage } from '../common/handlers';
import Card from '../card/Card';

const Lesson = ({content}) => {

  return(
    <div>
      Lesson
     <Card content = {content}/>
    </div>
  )
}

export default Lesson;