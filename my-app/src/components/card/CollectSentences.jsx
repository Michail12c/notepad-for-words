import React from 'react';
import style from './Card.module.css';
import { connect } from 'react-redux';
import { HandlerResponse } from '../common/handlerResponse';
import { Input } from '../main/form/FormsControls';
import { useState } from 'react';
import { useContext } from 'react';


const CollectSentences = ({contentElement, showWords, stateStatus, repeatList, countWordsThunk, contentWithCard, indexCard, addNewList}) => {
  let updatingWords = new HandlerResponse(contentElement.word, ''); 
  let newWords = updatingWords._modifierWords(contentElement.word);
  newWords = updatingWords.convertingStringToArray(newWords); 
  let randomNumber = updatingWords.randomInteger(0, newWords.length - 1);
  let activeWidth = updatingWords.dynamicWidth(newWords[randomNumber], 14); 
  let brokenSentence = []; 
  let nextArray = newWords.slice(); 
  let inputValue = React.createRef(); 

  const [statusContent, setStatusContent] = useState(false); 
  const [result, setResult] = useState(''); 

  for (let i = 0; i < newWords.length; i++){
    if( i === randomNumber ){
      brokenSentence.push(<span key = {i}><input  style={{width: activeWidth + 'px'}} autoFocus ref= {inputValue} className = {style.wordsFromMasInput} placeholder = {'...'}></input></span>); 
      continue
    }
     brokenSentence.push(<span key = {i} className = {style.wordsFromMas}>{newWords[i]}</span>);  
  }

  
  const handler = () => {
   let value = inputValue.current.value;
   value = updatingWords._modifierWords(value); 
   nextArray.splice(randomNumber, 1, value); 
   let result = updatingWords.comparisonArray(newWords, nextArray); 
   setResult(result); 
   setStatusContent(true); 
  }
  
  const nextCard = () => {
   showWords(); 
   setStatusContent(false); 
  }

  const wrongAnswer = () => {
    addNewList(contentWithCard[indexCard]);
    setStatusContent(false); 
  }

  const repeatListHere = () => {
    repeatList(true);
    setStatusContent(false); 
  }
  
  return (
    <div className = {style.collectSentences}>
      <div> 
        { !stateStatus 
            ? <>{ !statusContent ? brokenSentence : '' }</>
            : ''
        }
          
          <div>
            {!stateStatus 
               ? <>{!statusContent 
                  ? <button className = {style.handler} onClick = {handler}>Прийняти</button> 
                  : <button className = {result ? style.classTrue : style.classFalse} onClick = {result ? nextCard : wrongAnswer} >{result ? 'Правильно' : 'Не правильно' }</button> }</> 
               :   <>{<div><button onClick = {() => repeatList(false)}>Ні</button><button onClick = {repeatListHere}>Так</button></div>}</>  
            }
              
          </div>
      </div>  
    </div>
  )
}



const mapStateToProps = state => {
  return {
    contentWithCard: state.storagePage.contentWithCard
  }
}

export default connect(mapStateToProps, {})(CollectSentences); 