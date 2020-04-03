import React from 'react';
import style from './Card.module.css';
import { connect } from 'react-redux';
import { HandlerResponse } from '../common/handlerResponse';
import { Input } from '../main/form/FormsControls';
import { useState } from 'react';
import { setValue } from '../redux/storage-reducer';

const CollectSentences = ({contentElement, showWords, stateStatus, repeatList, countWordsThunk, contentWithCard, indexCard, addNewList}) => {
  let updatingWords = new HandlerResponse(contentElement.word, ''); 
  let newWords = updatingWords._modifierWords(contentElement.word);
  newWords = updatingWords.convertingStringToArray(newWords); 
  let randomNumber = updatingWords.randomInteger(0, newWords.length - 1);
  let brokenSentence = []; 
 
  const [stateInput, setStateInput] = useState(false);  
  const handler = () => {
    setStateInput(true); 
  }

  for (let i = 0; i < newWords.length; i++){
    if( i === randomNumber ){
      brokenSentence.push(<WordFromInput key = {i} stateInput = {stateInput} setStateInput = {setStateInput}/>); 
      continue
    }
     brokenSentence.push(<span key = {i} className = {style.wordsFromMas}>{newWords[i]}</span>);  
  }
  
  
  console.log(brokenSentence); 
  return (
    <div className = {style.collectSentences}>
       Collect sentences
      <div> 
          {brokenSentence}
          <div>
            <button onClick = {handler}>click</button> 
          </div>
      </div>  
    </div>
  )
}

const WordFromInput = ({stateInput, setStateInput}) => { 
  const[inputValue, setInputValue] = useState(''); 

  const handleChange = event => {
    setInputValue(event.target.value); 
  }
  if(stateInput){
    console.log(inputValue); 
    setStateInput(false);
  }

  return (
    <>
      <span key = {'a'} className = {style.wordsFromMas}><input key = {'a1'} className = {style.wordsFromMasInput} placeholder = '...' value = {inputValue} onChange = {handleChange}></input></span>
    </>
  )
}

const mapStateToProps = state => {
  return {
    contentWithCard: state.storagePage.contentWithCard
  }
}

export default connect(mapStateToProps, {})(CollectSentences); 