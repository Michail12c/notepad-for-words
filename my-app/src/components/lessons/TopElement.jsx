import React from 'react';
import style from './Lesson.module.css';
import { NavLink } from 'react-router-dom';

const TopElement = ({listWordsTwo, listUser, newList, updateItemList, itemList, setIndexCard}) => {
   const choiceList = (index) => {
     updateItemList(index);
     setIndexCard(0); 
   }
  return(
    <div className = {style.topElement}>
       <div>
          <button id= {itemList === 0 ? style.active : ''} onClick = {() => choiceList(0)}>Базовий список</button>
       </div>
       { listWordsTwo.length != 0 ? <div><button id= {itemList === 1 ? style.active : ''} onClick = {() => choiceList(1)}>Список для повторення</button></div> : ''}

       { listUser.length != 0 ? <div><button id= {itemList === 2 ? style.active : ''} onClick = {() => choiceList(2)}>{"Список " + newList}</button></div>: ''}

       { listWordsTwo.length === 0 ? <div>Поки що у вас лише один список. Більше списків можна створити натиснувши клавішу повторити, або перейшовши<NavLink to = {'/AddWordsForm'}>сюди</NavLink></div> : '' }
    </div>
  )
}
export default TopElement;