import React from 'react';
import style from './../Main.module.css';
import { connect } from 'react-redux';
import Fade from 'react-reveal/Fade';

const Statistics = ({newList, listWordsTwoLength, listUserLength, listWordsLength, updateFlag, flag}) => {
   const sumWords = (el, el2 = 0, el3 = 0) => {
     return  el + el2 + el3; 
   }
   const updateStatus = () => {
    flag !== 7 ? updateFlag(7) : updateFlag(0); 
   }
   let allWords = sumWords(listWordsLength, listWordsTwoLength, listUserLength); 
  return (
   <div>
     <Fade right cascade> 
    <div>
     <h4> Кількість слів/фраз</h4> 
       <p className = {style.statisticBasik}>Базовий список: { listWordsLength}</p>
        {listWordsTwoLength !== 0 ? <p>Список для повторень: {listWordsTwoLength} </p> : ''}
        {listUserLength !== 0 ?  <p>Список {newList}: { listUserLength}</p> : ''}
       <p>Всього слів/фраз: {allWords}</p>
    </div>
   </Fade>
    <div className = {style.statistic}>
      <h4>Статистика навчання</h4>
       <button id = {flag == 7  ? style.activeStatistic : ''} onClick = {updateStatus}>{flag !== 7 ? 'Показати графік' : 'Сховати графіки'}</button>
    </div>
   </div> 

  )
}

const mapStateToProps = state => {
  return{
    flag: state.storagePage.flag
  }
}

export default connect(mapStateToProps, {})(Statistics); 