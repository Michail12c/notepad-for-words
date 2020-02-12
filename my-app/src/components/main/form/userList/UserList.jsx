import React from 'react';
import style from './../../Main.module.css';
import { ListWords } from '../Form';
import { NavLink } from 'react-router-dom';

const UserList = ({listWordsTwo}) => {
  let userList = listWordsTwo.map( (el, index) => <ListWords key = {index + 1} id = {index + 1} word = {el.word} transfer = {el.transfer}/>); 
  return (
    <div>
       { listWordsTwo.length === 0 ? <p>В цьому списку нічого немає.<br/> Додайте до нього слово чи фразу,<br/> які б ви хотіли вивчити або виберіть їх<br/> із нашого базового списку, <br/>у розділі <NavLink to = '/Lesson'>урок</NavLink>, натиснувши клавішу `Повторити`</p>  : userList}  
    </div>
  )
}

export default UserList;