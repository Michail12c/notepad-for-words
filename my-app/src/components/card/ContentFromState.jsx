import React from 'react';
import style from './Card.module.css';
import { connect } from 'react-redux';
import { updateStatusPuzzlePage, activateComparing, deletePreviousWords, setPreviousWords } from '../redux/storage-reducer';
import { useState } from 'react';


const ContentFromState = ({previousWords, content, activateComparingValue, activateComparing, deletePreviousWords, statusPuzzlePage, updateStatusPuzzlePage, showWords}) => {
  console.log(activateComparingValue)
  
  if(previousWords.length === content.length){
    deletePreviousWords()
    let previous = previousWords.join(' ')
    content = content.join(' ')
   let result =  previous === content ? true : false 
   updateStatusPuzzlePage(result)
    activateComparing(true) 
  }


  const deleteWords = () => {
    console.log('test')
  }
  let contentForPuzzle = ''; 
   let  contentPuzzleFunction = () => {
    contentForPuzzle = previousWords.map((word, index) => <span className = {style.choiceWords}
    key = {index} onClick = {deleteWords}>{word}</span>)
    return <div className = {style.contentPuzzle}>{contentForPuzzle}</div>
  }  

  if(previousWords.length !== 0){
    contentForPuzzle = contentPuzzleFunction();  
  }

  return (
     <div className = {style.puzzleModeField}>
       {contentForPuzzle}
     </div>
  )
}

const mapStateToProps = state => {
  return{
    previousWords: state.storagePage.previousWords,
    statusPuzzlePage: state.storagePage.statusPuzzlePage,
    activateComparingValue: state.storagePage.activateComparingValue
  }
}

export default connect(mapStateToProps, {updateStatusPuzzlePage,  activateComparing, deletePreviousWords})(ContentFromState); 