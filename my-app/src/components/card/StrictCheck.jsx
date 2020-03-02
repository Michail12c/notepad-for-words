import React from 'react'; 
import style from './Card.module.css';
import { Field, reduxForm } from 'redux-form';
import {  Input2 } from '../main/form/FormsControls';

const formForCheckingAnswer = (props) => {
   return(
     <form onSubmit = {props.handleSubmit}>
       <div>
         <Field component = {Input2} name = {'checkAnswer'} placeholder = {'Введіть ці слова англійською'}/>
       </div>
       <div>
         <button>Прийняти</button>
       </div>
     </form>
   )
}

export const AddAnswerFromForm = reduxForm({
  form: 'addAnswer'
})(formForCheckingAnswer) 



const StrictCheck = () => {
  const onSubmit = (data) => {
    console.log(data)
  }
  return (
    <div>
      <AddAnswerFromForm onSubmit = {onSubmit}/>
    </div>
  )
}
export default StrictCheck; 