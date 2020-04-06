import React from 'react';
import style from './../Main.module.css';
import { reduxForm, Field, reset } from 'redux-form';
import { Textarea2, Input } from '../form/FormsControls';
import { connect } from 'react-redux';
import Fade from 'react-reveal/Fade';


const formSendLetter = (props) => {
  return(
    <form onSubmit = {props.handleSubmit}>
    <Fade left>
     <div>
       <Field component = {Input} name = {'yourEmail'} placeholder = {'Ваш email'} />
     </div>
    </Fade>
    <Fade right>
     <div>
       <Field component = {Textarea2} name = {'letter'} />
     </div>
   </Fade>
   <Fade left>
     <div>
       <button className = {style.sendLetter}>Відправити</button>
     </div>
   </Fade>
    </form>
  )
}

const SendLetter = reduxForm({
  form: 'sendLetter'
})(formSendLetter)

const Contacts = (props) => {
  const onSubmit = (formData) => {
    console.log(formData);
    props.reset('sendLetter');
  }
  return (
    <div className = {style.contacts}>
     <div className = {style.subscribe}>
       <a name ="contact"></a>
       <h3>Напишіть нам</h3>
       <SendLetter onSubmit = {onSubmit}/>
     </div>
    </div>
  )
}
export default connect (null, {reset})(Contacts);