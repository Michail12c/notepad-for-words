import React from 'react';
import style from './Lesson.module.css';
import { NavLink } from 'react-router-dom';

const TopElement = ({listWordsTwo, listUser, newList, updateItemList, itemList, setIndexCard, outputOrder, updateOutputOrder}) => {
   const choiceList = (index) => {
     updateItemList(index);
     setIndexCard(0); 
   }
   const sendOutputOrder = (status) => {
     updateOutputOrder(status); 
   }

  return(
    <div className = {style.topElement}>
       <div>
          <button id= {itemList === 0 ? style.active : ''} onClick = {() => choiceList(0)}>Базовий список</button>
       </div>
       { listWordsTwo.length != 0 ? <div><button id= {itemList === 1 ? style.active : ''} onClick = {() => choiceList(1)}>Список для повторення</button></div> : ''}

       { listUser.length != 0 ? <div><button id= {itemList === 2 ? style.active : ''} onClick = {() => choiceList(2)}>{"Список " + newList}</button></div>: ''}

       { listWordsTwo.length === 0 ? <div>Поки що у вас мало списків. Більше списків можна створити натиснувши клавішу повторити, або перейшовши<NavLink to = {'/AddWordsForm'}>сюди</NavLink></div> : '' }
        
        <div className = {style.wrapperButtons}>
          Порядок виводу слів
          <div>
          <button onClick = { () => sendOutputOrder(true) }
          id = {outputOrder ? style.active : ''} 
          className = {style.buttonTopElement}>З початку</button>
          <button  onClick = {() => sendOutputOrder(false) }
          id = {!outputOrder ? style.active : ''} 
          className = {style.buttonTopElement}>З кінця</button>
          </div>
         
        </div>
      

    </div>
  )
}
export default TopElement;