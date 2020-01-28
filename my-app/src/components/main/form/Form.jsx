import React from 'react';
import style from './../Main.module.css';
import {  reduxForm,  Field } from 'redux-form';
import { connect } from 'react-redux';
import {  addWordsThunk } from '../../redux/main-reducers';

const formForWords = (props) => {
  return (
   <form onSubmit = {props.handleSubmit}>
     <div>
       <Field component = {'textarea'} name= {'word'} placeholder = {'Введіть іноземну фразу чи слово'}/>
     </div>
     <div>
     <Field component = {'textarea'} name= {'transfer'} placeholder = {'Введіть переклад вашої фрази чи слова'}/>
     </div>
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
  console.log(props)
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
