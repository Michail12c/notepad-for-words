import React from 'react';
import { connect } from 'react-redux';
import style from './Card.module.css'; 
import { HandlerResponse } from '../common/handlerResponse';
import { setPuzzleWords, setPreviousWords } from '../redux/storage-reducer';
import ContentFromState from './ContentFromState';

const PuzzleMode = ({contentElement, showWords, repeatList, stateStatus, setPuzzleWords, puzzleWords, setPreviousWords}) => {
  let contentFromState = puzzleWords
  const choiceWords = (e) => {
    let target = e.target;
    target.remove();  
    setPreviousWords(target.textContent)
  }
  let solution = new HandlerResponse(contentElement.word, contentFromState)
  let content = solution.mixedWords();

  const removeWords = (el) => {
    let newList = content.filter(word => word !== el)
    newList = newList.join(' ')
    setPreviousWords(newList); 
  }

 
  let contentFromProps = content.map((word, index) => <span className = {style.choiceWords} key = {index} onClick = {choiceWords}>{word}</span>)
 


  return (
    <div className = {style.puzzleMode}>
      <div className = {style.puzzleModeField}>
         <ContentFromState/>
      </div>
      <div className = {style.contentFromState}>
        {contentFromProps}
      </div>
    </div>
  )
}
const mapStateToProps = state => {
  return {
    puzzleWords: state.storagePage.puzzleWords
  }
}

export default connect(mapStateToProps, {setPuzzleWords, setPreviousWords})(PuzzleMode);