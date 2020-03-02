import React from 'react';
import style from './Lesson.module.css';
import Card from '../card/Card';
/* import Card2 from '../card/Card2'; */
import TopSection from '../top_section/TopSection';
import TopElement from './TopElement';
import Explication from './Explication';

const Lesson = ({ content, addWordsThunkTwoList, initializeMain, 
  listWordsTwo, listUser, newList, itemList, updateItemList, updateIndex, indexCard, setIndexCard, removeWordsFromListThunk, updateOutputOrder, outputOrder, statusLesson}) => {
  return (
  <div className={style.lesson}>
     <TopSection logo = {'logo'} calculate = {'calculate'}/>
    <div className = {style.wrapper}>
     <div className = {style.leftSide}>
          <TopElement listWordsTwo = {listWordsTwo} 
          listUser = {listUser}
          newList = {newList} 
          updateItemList = {updateItemList}
          itemList = {itemList}
          updateIndex = {updateIndex}
          setIndexCard = {setIndexCard}
          outputOrder = {outputOrder}
          updateOutputOrder = {updateOutputOrder}
          />
      </div>
      <div className = {style.card}>
        <Card content={content}
          addWordsThunkTwoList={addWordsThunkTwoList}
          initializeMain={initializeMain}
          listWordsTwo={listWordsTwo}
          listUser = {listUser}
          itemList = {itemList}
          updateItemList = {updateItemList}
          indexCard = {indexCard}
          setIndexCard = {setIndexCard}
          removeWordsFromListThunk = {removeWordsFromListThunk}
          outputOrder = {outputOrder}
          statusLesson = {statusLesson}
        />
      </div>
      <div className = {style.rightSide}>
         <Explication itemList = {itemList} newList = {newList}/>
      </div>
      </div> 
    </div>
  )
}

export default Lesson;