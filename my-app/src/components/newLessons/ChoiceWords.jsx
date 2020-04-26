import React from 'react';
import style from './NewLessons.module.css'
import { connect } from 'react-redux';
import { useState } from 'react';
import TextButtons from '../material/button';
import Bounce from 'react-reveal/Bounce';
import Fade from 'react-reveal/Fade';
import { HandlerResponse } from '../common/handlerResponse';
import { InteractionWithLocalStorage } from '../common/handlers';


const ChoiceWords = ({listWords}) => {
  const [statusContent, setStatusContent] = useState(false) 

 
  return (
    <div>
       { !statusContent
           ? <TextButtons callback = {() => setStatusContent(true)} title= {'Почати'}/>
           : <ShowList listWords = {listWords}/>
       }
    </div>
  )
}

const ShowList = ({listWords}) => {
  let listTwo = listWords.slice()
  let handler = new HandlerResponse('', '')
  let newMas = handler.shuffle(listTwo)
  newMas = newMas.filter((el, index) => index <= 4)

 const controlWord = newMas[handler.randomInteger(0, 4)]

  const choiceWordsFn = (e) => {
    const value = e.target.dataset.word
    let a = handler._comparison(value, controlWord.translate)
    e.target.style.backgroundColor = !a ? 'rgb(158, 86, 86' : 'green'
  }
  const changeList = () => {
    
  }

  let list = newMas.map((el, index) => <span key = {index} onClick = {choiceWordsFn} data-word= {el.translate}>{el.word}</span>)
  
  return(
    <div className = {style.mainSectionTranslate}>
      <h4>Виберіть правильний переклад</h4>
      <Timer value = {15} callback = {changeList}/>
      <div className = 'listAnimate'>
       <Fade top cascade> 
        <div className = {style.showList}>
          {list}
        </div> 
      </Fade> 
       </div>
      <div className = {style.controlWord}>
        <Bounce top>
           <span>{controlWord.translate}</span>
        </Bounce>
      </div>
    </div> 
  )
}

const Timer = ({value, callback}) => {
  const [time, setTime] = useState(value)
 
  let timer = setTimeout(() => {
    if(time > 0){
      setTime(time - 1)
      return
    }
   callback()
   
  }, 1000) 

  return (
    <div className = {style.timer}>
       {time}
    </div>
  )
}

const  mapStateToProps = state => {
  return{
   
  }
}

export default connect(mapStateToProps, {})(ChoiceWords)