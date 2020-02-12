import React from 'react';
import UserList from '../userList/UserList';
import CreateList from './CreateList';
import ExplainList from './ExplainList';
import style from './CreateList.module.css';

const CentralComponent = ({elements, flag, updateFlag,  listWordsTwo, listUser}) => {
 // Переписати на switch
  let newElement;
   if (flag == 0) newElement = <TitleComponent/>;
   if(flag == 1) newElement = elements;
   if(flag == 2) newElement = <UserList listWordsTwo = {listWordsTwo}/>
   if(flag === 3) return newElement = <CreateList updateFlag = {updateFlag}/>;
   if (flag === 4){
   listUser.length === 0 ? (newElement = <ExplainList updateFlag = {updateFlag}/>) :  
   (newElement = <UserList  listWordsTwo = {listUser}/>)
  }
  return (
  <div>{newElement}</div>
  )
}
const TitleComponent = () => {
  return (
    <div className = {style.titleComponent}>
       У нас є базовий список слів ...
       Почніть навчання зі створення власного списку, куди зможете додавати слова, які бажаєте запа`мятати  
    </div>
  )
}

export default CentralComponent;