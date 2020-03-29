import React from 'react';
import style from './../Main.module.css';
import { useState } from 'react';

const Statistics = ({newList, listWordsTwoLength, listUserLength, listWordsLength, updateFlag}) => {

  const[status, setStatus] = useState(false); 
   const sumWords = (el, el2 = 0, el3 = 0) => {
     return  el + el2 + el3; 
   }
   const updateStatus = () => {
    !status ? updateFlag(7) : updateFlag(0); 
     setStatus(!status)
     
   }
   let allWords = sumWords(listWordsLength, listWordsTwoLength, listUserLength); 
  return (
   <div>
    <div>
     <h4> Кількість слів/фраз</h4> 
       <p className = {style.statisticBasik}>Базовий список: { listWordsLength}</p>
        {listWordsTwoLength !== 0 ? <p>Список для повторень: {listWordsTwoLength} </p> : ''}
        {listUserLength !== 0 ?  <p>Список {newList}: { listUserLength}</p> : ''}
       <p>Всього слів/фраз: {allWords}</p>
    </div>
    <div className = {style.statistic}>
      <h4>Статистика навчання</h4>
       <button id = {status ? style.activeStatistic : ''} onClick = {updateStatus}>{!status ? 'Показати графік' : 'Сховати графік'}</button>
    </div>
   </div> 

  )
}

export default Statistics; 