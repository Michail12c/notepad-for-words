import React, { useState, Fragment } from 'react';
import style from './../Main.module.css';
import {  reduxForm,  Field, reset } from 'redux-form';
import { connect } from 'react-redux';
import {  addWordsThunk, initializeMain } from '../../redux/main-reducers';
import { minLengthCreator, required } from '../../common/validator';
import { Textarea } from './FormsControls';
import TopSection from '../../top_section/TopSection';
import { setFlagAC } from '../../redux/storage-reducer';
import CreateList from './createList/CreateList';

let minLength = minLengthCreator(1);
const formForWords = (props) => {
  return (
   <form onSubmit = {props.handleSubmit} className = {style.topForm}>
     <div className = {style.formTitle}>Додайте нову фразу до свого  списку</div> 
     <div>
       <Field component = {Textarea} name= {'word'} placeholder = {'Введіть іноземну фразу чи слово'} validate = {[required, minLength]} />
     </div>
     <div>
     <Field component = {Textarea} name= {'transfer'} placeholder = {'Введіть переклад вашої фрази чи слова'} validate = {[required, minLength]} />
     </div>
     {   props.error &&
           <div className = {style.error}> {props.error}</div>
        }
     <div>
       <button className = {style.remember}>Запам`ятати</button>
     </div>
   </form>
  )
}

const AddWords = reduxForm({
  form: 'addWords'
})(formForWords);

const AddWordsForm = ({listWords, flag, ...props}) => {

 const onSubmit = (formData) => {
   props.addWordsThunk(formData);
   props.reset('addWords');
 }

 let myList =  listWords[0].map( (el, index) => <ListWords key = {index + 1} id = {index + 1} word = {el.word} transfer = {el.transfer}/>); 


 const updateFlag = (num) => {
   flag === num ?  props.setFlagAC(0) : props.setFlagAC(num);
 }

  return (
    <div className = {style.sectionForm}>
      <TopSection calculate = {'show'}/>
       <div className = {style.cardForm}>
       <div className = {style.menuForm}>
          <div  >
            <button id = {flag === 1 ? style.activeForm : '' } onClick = {() => {updateFlag(1)}}>{ flag === 1 ?'Сховати список' 
            : 'Показати загальний список'  }</button>
          </div>
          <div>
            <button id = {flag === 2 ? style.activeForm : ''} onClick = {() => {updateFlag(2)}}>{ flag === 2 ? 'Сховати свій  список'
             : 'Показати свій список' }</button>
          </div>
          <div>
            <button id = {flag === 3 ?  style.activeForm : '' } onClick = {() => {updateFlag(3)}}>{
            'Створити новий список'}</button>
          </div>
        </div>
        {
        flag == 0 
        ? <AddWords  onSubmit = {onSubmit}/> 
        : <CentralComponent updateFlag = {updateFlag} flag = {flag} elements = {myList}/>
        }
        <div className = {style.statistic}>
           Статистика
        </div>
       </div>  
    </div>
  )
}

const ListWords = (props) => {
  return(
    <div className = {style.listWords}>
      <div>{props.id + ') ' + props.word}</div>
      <div>{props.transfer}</div>
    </div>
  )
}
const CentralComponent = ({elements, flag, updateFlag}) => {
  let newElement;
  if(flag == 2){
    return newElement = 'Hello';
  }
 if(flag === 3){
   return newElement =  <CreateList updateFlag = {updateFlag}/>;
 }
  newElement = elements;
  return (
  <div>{newElement}</div>
  )
}

const mapStateToProps = (state) => {
  return {
   listWords: state.mainPage.listWords,
   flag: state.storagePage.flag
  }
}

export default connect (mapStateToProps, {addWordsThunk, reset, initializeMain, setFlagAC})(AddWordsForm);
