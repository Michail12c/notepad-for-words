import React from 'react';
import UserList from '../userList/UserList';
import CreateList from './CreateList';
import ExplainList from './ExplainList';
import style from './CreateList.module.css';
import { NavLink } from 'react-router-dom';
import EditingList from './EditingList';
import ChartElement from './Charts';
import Flip from 'react-reveal/Flip';

const CentralComponent = ({elements, flag, updateFlag,  listWordsTwo, listUser, editionListUserThunk, removeWordsFromListThunk}) => {
  let newElement;
  switch (flag){
    case 0: 
      newElement = <TitleComponent listUser = {listUser}/>
    break
    case 1:
      newElement = elements
      break
    case 2:
      newElement = <UserList listWordsTwo = {listWordsTwo}/> 
      break
    case 3:
      return newElement = <CreateList updateFlag = {updateFlag}/>  
    case 4:
      listUser.length === 0 ? (newElement = <ExplainList updateFlag = {updateFlag}/>) :  
      (newElement = <UserList  listWordsTwo = {listUser}/>)
      break
    case 6: 
    return newElement = <EditingList listUser = {listUser} 
    editionListUserThunk = {editionListUserThunk}
    removeWordsFromListThunk = {removeWordsFromListThunk}
    />;
      break    
    case 7:
      return newElement = <ChartElement/> 
     break  
  }

  return (
  <div>{newElement}</div>
  )
}
const TitleComponent = ({listUser}) => {
  return (
    <div className = {style.titleComponent}>
      { listUser.length === 0 
      ? <div> Почніть навчання зі створення власного списку, куди зможете додавати слова, які бажаєте запа`мятати </div> 
       : <MainContent/>
       }
      
    </div>
  )
}

const MainContent = () => {
  return (
    <div className = {style.mainContent}>
    <h4>Уроки</h4>
    <Flip top>
    <img src="https://4geo.ru/images/personal-pages-share/370949660/img1158427129_2516292169544768.jpg" alt="foto"/>
    </Flip>
    <p>Ви можете почати навчання, перейшовши у розділ <NavLink to = '/Lesson'>урок</NavLink></p></div>
  )
}

export default CentralComponent;