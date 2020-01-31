import React from 'react';
import style from './../Main.module.css';
import {  reduxForm,  Field } from 'redux-form';
import { connect } from 'react-redux';
import {  addWordsThunk } from '../../redux/main-reducers';
import { minLengthCreator, required } from '../../common/validator';
import { Textarea } from './FormsControls';

let minLength = minLengthCreator(1);
const formForWords = (props) => {
  return (
   <form onSubmit = {props.handleSubmit}>
     <div>
       <Field component = {Textarea} name= {'word'} placeholder = {'Введіть іноземну фразу чи слово'} validate = {[required, minLength]}/>
     </div>
     <div>
     <Field component = {Textarea} name= {'transfer'} placeholder = {'Введіть переклад вашої фрази чи слова'} validate = {[required, minLength]}/>
     </div>
     {   props.error &&
           <div className = {style.error}> {props.error}</div>
        }
     <div>
       <button>Запам`ятати</button>
     </div>
   </form>
  )
}

const AddWords = reduxForm({
  form: 'addWords'
})(formForWords);

const AddWordsForm = (props) => {
  
 const onSubmit = (formData) => {
   props.addWordsThunk(formData);
 
 }
  return (
    <div>
       <AddWords  onSubmit = {onSubmit}/>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {

  }
}

export default connect (mapStateToProps, {addWordsThunk})(AddWordsForm);
