import React, { useState } from 'react';
import style from './../Main.module.css';
import {  reduxForm,  Field, reset } from 'redux-form';
import { connect } from 'react-redux';
import {  addWordsThunk, initializeMain } from '../../redux/main-reducers';
import { minLengthCreator, required } from '../../common/validator';
import { Textarea } from './FormsControls';
import TopSection from '../../top_section/TopSection';

let minLength = minLengthCreator(1);
const formForWords = (props) => {
  return (
   <form onSubmit = {props.handleSubmit}>
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

const AddWordsForm = ({listWords, ...props}) => {
  let [status, setStatus] = useState(false);
 const onSubmit = (formData) => {
   props.addWordsThunk(formData);
   props.reset('addWords');
 }

 let myList =  listWords[0].map( (el, index) => <ListWords id = {index + 1} word = {el.word} transfer = {el.transfer}/>); 


 const updateStatus = () => {
   setStatus(!status);
 }
  return (
    <div className = {style.sectionForm}>
      <TopSection calculate = {'show'}/>
       <div className = {style.cardForm}>
       <div className = {style.menuForm}>
          <div>
            <button onClick = {updateStatus}>{!status ? 'Показати загальний список' : 'Сховати список'}</button>
          </div>
          <div>
            <button onClick = {updateStatus}>{!status ? 'Показати свій список' : 'Сховати свій  список'}</button>
          </div>
        </div>
        {
        !status 
        ? <AddWords  onSubmit = {onSubmit}/> 
        : <div>{myList}</div>
        }
        <div>
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

const mapStateToProps = (state) => {
  return {
   listWords: state.mainPage.listWords
  }
}

export default connect (mapStateToProps, {addWordsThunk, reset, initializeMain})(AddWordsForm);
