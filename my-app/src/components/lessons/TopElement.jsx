import React from 'react';
import style from './Lesson.module.css';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { setStatusLesson } from '../redux/storage-reducer';

const TopElement = ({listWordsTwo, listUser, newList, updateItemList, itemList, setIndexCard, outputOrder, updateOutputOrder, statusLesson, setStatusLesson}) => {
   const choiceList = (index) => {
     updateItemList(index);
     setIndexCard(0); 
   }
   const sendOutputOrder = (status) => {
     updateOutputOrder(status); 
   }

  return(
    <div className = {style.topElement}>
       <div className = {style.mainChoiceList}>
          <div className = {style.choiceList}>Вибрати режим уроку</div>
           <div>
             <button id= {statusLesson === 0 ? style.active2 : ''} onClick = {() => setStatusLesson(0)}>Легкий режим</button>
           </div>
           <div >
             <button id= {statusLesson === 1 ? style.active2 : ''} onClick = {() => setStatusLesson(1) }>Строгий режим</button>
           </div>
           <div>
             <button id= {statusLesson === 2 ? style.active2 : ''} onClick = {() => setStatusLesson(2) }>Режим пазлу</button>
           </div>
           <div>
             <button id= {statusLesson === 3 ? style.active2 : ''} onClick = {() => setStatusLesson(3) }>Доповнити речення</button>
           </div>
       </div>
         <div className = {style.choiceList}>Обрати список для повторення</div>
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
const mapStateToProps = (state) => {
  return {
    statusLesson: state.storagePage.statusLesson
  }
}

export default connect(mapStateToProps, {setStatusLesson})(TopElement);