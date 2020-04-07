import React from 'react';
import style from './CreateList.module.css';
import { Field, reduxForm } from 'redux-form';
import { Input2 } from '../FormsControls';
import { minLengthCreator, required } from '../../../common/validator';
import { connect } from 'react-redux';
import { createList, createListThunk } from '../../../redux/main-reducers';
import { setFlagAC } from '../../../redux/storage-reducer';
import Flip from 'react-reveal/Flip';

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
    props.createListThunk(formData.list)
    props.setFlagAC(0);
  }
  const updateFlagList = () => {
    props.updateFlag(0);
  }
  return (
    <Flip right>
    <div  className = { style.choiceMenuForm} >
       <div className = {style.card + ' ' +  style.content}>
         <AddList updateFlag = {updateFlagList} onSubmit = {onSubmit}/>
       </div>
    </div>
  </Flip>
  )
} 

export default connect(null, {createList, setFlagAC, createListThunk})(CreateList);