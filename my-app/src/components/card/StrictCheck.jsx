import React from 'react'; 
import style from './Card.module.css';
import { Field, reduxForm } from 'redux-form';
import {  Input2 } from '../main/form/FormsControls';
import { useState } from 'react';
import { minLengthCreator, required } from '../common/validator';
import { useEffect } from 'react';
import { HandlerResponse } from '../common/handlerResponse';

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



const StrictCheck = ({contentElement, showWords, stateStatus, repeatList, countWordsThunk}) => {

  const [statusForm, setStatusForm] = useState(false); 
  const [answerStatus, setAnswerStatus] = useState(false);

  const onSubmit = (data) => {
    let solution = new HandlerResponse(contentElement.word, data.checkAnswer)
    let result = solution.collationResult() 
    setAnswerStatus(result);  
    setStatusForm(true);  
  }
  
  useEffect(() => {
    if(stateStatus){
    setStatusForm(true)
  }
  }, [stateStatus]); 

  return (
    <div>
     { !statusForm ? <AddAnswerFromForm onSubmit = {onSubmit}/> 
                   : <ResultAnswer answerStatus = {answerStatus} 
                                   showWords = {showWords} 
                                   setStatusForm = {setStatusForm} 
                                   stateStatus = {stateStatus} 
                                   repeatList = {repeatList}
                                   countWordsThunk = {countWordsThunk} /> }
    </div>
  )
}

const ResultAnswer = ({answerStatus, showWords, setStatusForm, stateStatus, repeatList, countWordsThunk}) => {
  const nextCard = () => {
   setStatusForm(false); 
   showWords(); 
  }
 const wrongAnswer = () => {
  setStatusForm(false); 
  showWords();
  countWordsThunk('countWords');
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
                      : <button onClick = {wrongAnswer} className = {style.classFalse}>Не правильно</button>} </> 
       : <> {<div><button onClick = {() => repeatList(false)}>Ні</button><button onClick = {repeatListHere}>Так</button></div> }</>}
    </div>
  )
}

export default StrictCheck; 