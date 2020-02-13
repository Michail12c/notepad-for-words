import React from 'react';
import style from './../Main.module.css';
import {  reduxForm,  Field, reset } from 'redux-form';
import { connect } from 'react-redux';
import {  addWordsThunk, initializeMain, addWordsThunkTwoList, addWordThunkListUser } from '../../redux/main-reducers';
import { minLengthCreator, required } from '../../common/validator';
import { Textarea } from './FormsControls';
import TopSection from '../../top_section/TopSection';
import { setFlagAC } from '../../redux/storage-reducer';
import CentralComponent from './createList/CentralComponent';

let minLength = minLengthCreator(1);
const formForWords = (props) => {
  return (
   <form onSubmit = {props.handleSubmit} className = {style.topForm}>
     <div className = {style.formTitle}>Додайте нову фразу до свого списку </div> 
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

export const AddWords = reduxForm({
  form: 'addWords'
})(formForWords);


const AddWordsForm  = ({listWords, listWordsTwo, flag, newList, listUser,
  ...props}) => {

 const onSubmit = (formData) => {
   props.addWordThunkListUser(formData);
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
            : 'Показати базовий список'  }</button>
          </div>
          <div>
            <button id = {flag === 2 ? style.activeForm : ''} onClick = {() => {updateFlag(2)}}>{ flag === 2 ? 'Сховати список для повторення'
             : 'Показати список для повторення' }</button>
          </div>
          <div>
           {newList ? <button id = {flag === 4 ? style.activeForm : '' } onClick = {() => {updateFlag(4)}}>{'Показати список ' + newList}</button>  
             : '' } 
           </div>  
           <div>
            {
              newList ? <button id = {flag === 5 ? style.activeForm : '' } onClick = {() => {updateFlag(5)}}>{'Поповнити ' + newList}</button> : ''
            }
          </div> 
          <div>
            {
             !newList ?   <button id = {flag === 3 ?  style.activeForm : '' } onClick = {() => {updateFlag(3)}}>{
                'Створити свій список'}</button> 
                :   <button>{'Редагувати ' + newList}</button>
            } 
          </div>
        </div>
        {
        flag == 5 
         ? <AddWords  onSubmit = {onSubmit}/> 
         : <CentralComponent updateFlag = {updateFlag} 
           listWordsTwo = {listWordsTwo} 
           flag = {flag} 
           elements = {myList}
           listUser = {listUser}
           />
        }
        <div className = {style.statistic}>
           Статистика
        </div>
       </div>  
    </div>
  )
}

export const ListWords = (props) => {
  return(
    <div className = {style.listWords}>
      <div>{props.id + ') ' + props.word}</div>
      <div>{props.transfer}</div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
   listWords: state.mainPage.listWords,
   listWordsTwo: state.mainPage.listWordsTwo,
   listUser: state.mainPage.listUser,
   newList: state.mainPage.newList,
   flag: state.storagePage.flag
  }
}

export default connect (mapStateToProps, {addWordsThunk, addWordsThunkTwoList,addWordThunkListUser, reset, initializeMain, setFlagAC})(AddWordsForm);
