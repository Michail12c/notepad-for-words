import React from 'react';
import style from './../Main.module.css';

const Statistics = ({newList, listWordsTwoLength, listUserLength, listWordsLength}) => {
   const sumWords = (el, el2 = 0, el3 = 0) => {
     return  el + el2 + el3; 
   }
   let allWords = sumWords(listWordsLength, listWordsTwoLength, listUserLength); 
  return (
    <div>
     <h4> Кількість слів/фраз</h4> 
       <p className = {style.statisticBasik}>Базовий список: { listWordsLength}</p>
        {listWordsTwoLength !== 0 ? <p>Список для повторень: {listWordsTwoLength} </p> : ''}
        {listUserLength !== 0 ?  <p>Список {newList}: { listUserLength}</p> : ''}
       <p>Всього слів/фраз: {allWords}</p>
    </div>
  )
}

export default Statistics; 