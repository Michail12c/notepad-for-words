import React from 'react'; 
import style from './CreateList.module.css'; 
import { useState, useEffect } from 'react';
import { createRef } from 'react';

const AddChangeToList = (props) => {
  const [status, setStatus] = useState(props.props.word);
  const [statusTransfer, setStatusTransfer] = useState (props.props.transfer); 

  const changeField = e => setStatus(e.currentTarget.value);  
  const changeFieldTransfer = e => setStatusTransfer(e.currentTarget.value);

  const onSubmit = (event) => { 
   let newWord = {word: `${status}`, transfer: `${statusTransfer}`}; 
   props.changeList(newWord, props.props.id, 'listUser');
   event.preventDefault(); 
  }
  return (
    <form onSubmit = {onSubmit} className = {style.formEditionList}>
       <div>
         <input className={style.input} name = {'word'} onChange = {changeField}  value = {status} autoFocus = {true}/>
       </div>
       <div>
         <input name = {'transfer'} onChange = {changeFieldTransfer} value = {statusTransfer}/> 
       </div>
       <div className = {style.changeList} > 
         <button>Зберегти</button>
       </div>
    </form>
  )
}





const EditingList = (props) => {


  let prevElements = props.listUser.map( (el, index) => <ListWordsChange key = {index + 1} id = {index + 1} word = {el.word} transfer = {el.transfer} editionListUserThunk = {props.editionListUserThunk} removeWordsFromListThunk = {props.removeWordsFromListThunk}/> )
  return (
    <div className = {style.editingList}>
        {prevElements}
    </div>
  )
}

export const ListWordsChange = (props) => {
  const [state, setState] = useState(false); 
  const [confirmation, setConfirmation] = useState(false); 

  const updateState = () => {
    setState(true); 
  }
 const changeList = (el1, el2, el3) => {
  props.editionListUserThunk(el1, el2, el3);
  setState(false);  
 }
 const removeElement = () => {
   let wordForRemove = {word: `${props.word}`, transfer: `${props.transfer}`};
   props.removeWordsFromListThunk(wordForRemove, 'listUser'); 
   setConfirmation(false);
 }
  return(
  !state ?  <div className = {style.listWordsChange}>
      <div>
         <div>{props.id + ') ' + props.word}</div>
         <div>{props.transfer}</div>
      </div>
      <div className = {style.sendChange}>
        <button onClick = {updateState}>Редагувати</button>
       {!confirmation 
       ? <button onClick = { () => setConfirmation(true)}>Видалити</button> 
       : <span className = {style.confirmation}>Ви впевненні? 
       <button className = {style.buttonOne} onClick = {removeElement}>так</button>
       <button onClick = {() => setConfirmation(false)}>ні</button></span>}
      </div>
    </div> : <div><AddChangeToList props = {props} changeList = {changeList}/></div>
  )
}

export default EditingList; 