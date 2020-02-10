import React from 'react';
import style from './CreateList.module.css';
import { Field, reduxForm } from 'redux-form';
import { Input2 } from '../FormsControls';
import { minLengthCreator, required } from '../../../common/validator';

let minLength = minLengthCreator(1);

const newList = (props) => {
  const updateFlagFromForm = () => {
    props.updateFlag();
  }
  return(
    <form onSubmit = {props.handleSubmit}>
      <div className = {style.title}>Як називатиметься ваш список?</div>
      <div>
        <Field component = {Input2} name = {'list'} validate = {[required, minLength]} placeholder = {'Веддіть назву вашого списку'}/>
      </div> 
      <div className = {style.choiceMenu }>
          <button onClick = {updateFlagFromForm}>Відмінити</button>
          <button>Зберегти</button>
       </div>
    </form>
  )
}
const AddList = reduxForm({
  form:'addList'
})(newList)

const CreateList = (props) => {
  const onSubmit = (formData) => {
    console.log(formData);
  }
  const updateFlagList = () => {
    props.updateFlag(0);
  }
  return (
    <div className = {style.card + ' ' + style.choiceMenuForm}>
       <div className = {style.content}>
         <AddList updateFlag = {updateFlagList} onSubmit = {onSubmit}/>
       </div>
   
    </div>
  )
}
export default CreateList;