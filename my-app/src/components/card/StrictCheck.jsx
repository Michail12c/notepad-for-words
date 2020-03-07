import React from 'react'; 
import style from './Card.module.css';
import { Field, reduxForm } from 'redux-form';
import {  Input2 } from '../main/form/FormsControls';
import { useState } from 'react';
import { minLengthCreator, required } from '../common/validator';
import { useEffect } from 'react';

let minLength = minLengthCreator(1);

const formForCheckingAnswer = (props) => {
   return(
     <form onSubmit = {props.handleSubmit}>
       <div>
         <Field component = {Input2} name = {'checkAnswer'} placeholder = {'Введіть ці слова англійською'} validate = {[required, minLength]}/>
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



const StrictCheck = ({contentElement, showWords, stateStatus, repeatList}) => {

  const [statusForm, setStatusForm] = useState(false); 
  const [answerStatus, setAnswerStatus] = useState(false);

  const onSubmit = (data) => {
    let word = contentElement.word.toLowerCase();
    word = word.replace(/[?!\.]/g, ''); 
    let answer = data.checkAnswer.trim().toLowerCase();
    answer =  answer.replace(/[?!\.]/g, '')
    let result = comparison(word, answer);
    setAnswerStatus(result);  
    setStatusForm(true);  
  }
  useEffect(() => {
    if(stateStatus){
    setStatusForm(true)
  }
  }, [stateStatus]); 

  const comparison = (word1, word2) => {
    let result = word1 === word2 ? true : false
    return result; 
  }
  return (
    <div>
     { !statusForm ? <AddAnswerFromForm onSubmit = {onSubmit}/> 
                   : <ResultAnswer answerStatus = {answerStatus} 
                                   showWords = {showWords} 
                                   setStatusForm = {setStatusForm} 
                                   stateStatus = {stateStatus} 
                                   repeatList = {repeatList}/> }
    </div>
  )
}

const ResultAnswer = ({answerStatus, showWords, setStatusForm, stateStatus, repeatList}) => {
  const nextCard = () => {
   setStatusForm(false); 
   showWords(); 
  }
 const repeatListHere = () => {
   repeatList(true);
   setStatusForm(false)
 }
  return(
    <div>
     {!stateStatus 
       ? <> {answerStatus 
                      ? <button onClick = {nextCard} className = {style.classTrue}>Правильно</button> 
                      : <button onClick = {nextCard} className = {style.classFalse}>Не правильно</button>} </> 
       : <> {<div><button onClick = {() => repeatList(false)}>Ні</button><button onClick = {repeatListHere}>Так</button></div> }</>}
    </div>
  )
}

export default StrictCheck; 