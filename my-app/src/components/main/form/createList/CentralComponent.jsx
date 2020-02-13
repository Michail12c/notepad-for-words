import React from 'react';
import UserList from '../userList/UserList';
import CreateList from './CreateList';
import ExplainList from './ExplainList';
import style from './CreateList.module.css';
import { NavLink } from 'react-router-dom';

const CentralComponent = ({elements, flag, updateFlag,  listWordsTwo, listUser}) => {
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
       : <div>Тепер ви можете почати навчання, перейшовши у розділ <NavLink to = '/Lesson'>урок</NavLink>  </div>
       }
      
    </div>
  )
}

export default CentralComponent;