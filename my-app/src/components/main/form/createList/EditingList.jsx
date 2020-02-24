import React from 'react'; 
import style from './CreateList.module.css'; 
import { Field, reduxForm } from 'redux-form';
import { useState } from 'react';

const formEditionList = (props) => {
  return (
    <form onSubmit = {props.handleSubmit}>
       <div>
         <Field component = {'input'} name = {'word'} />
       </div>
       <div>
         <Field component = {'input'} name = {'transfer'}/> 
       </div>
       <div>
         <button>Зберегти</button>
       </div>
    </form>
  )
}

export const AddChangeToList = reduxForm({
  form: 'addChange'
})(formEditionList); 

const EditingList = (props) => {
  const [state, setState] = useState (false); 
  const updateState = () => {
    setState(true); 
  }
  const onSubmit = (formData) => {
    console.log(formData)
  }
  let prevElements = props.listUser.map( (el, index) => <ListWordsChange updateState = {updateState} key = {index + 1} id = {index + 1} word = {el.word} transfer = {el.transfer}/>)
  return (
    <div className = {style.editingList}>
       refactoring 
        { !state ? prevElements : <AddChangeToList onSubmit = {onSubmit}/> }
    </div>
  )
}


export const ListWordsChange = (props) => {
  return(
    <div className = {style.listWordsChange}>
       <div>
          <div>{props.id + ') ' + props.word}</div>
          <div>{props.transfer}</div>
       </div>
       <div>
         <button onClick = {props.updateState}>Редагувати</button>
       </div>
 
    </div>
  )
}

export default EditingList; 