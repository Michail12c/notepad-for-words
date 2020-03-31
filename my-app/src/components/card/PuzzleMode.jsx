import React from 'react';
import { connect } from 'react-redux';
import style from './Card.module.css'; 
import { HandlerResponse } from '../common/handlerResponse';
import { setPuzzleWords, setPreviousWords, activateComparing } from '../redux/storage-reducer';
import ContentFromState from './ContentFromState';

const PuzzleMode = ({contentElement, showWords, repeatList, stateStatus, setPuzzleWords, puzzleWords, setPreviousWords, activateComparing, activateComparingValue, statusPuzzlePage, countWordsThunk, addNewList, indexCard, contentWithCard}) => {

  let contentFromState = puzzleWords
  let solution = new HandlerResponse(contentElement.word, contentFromState)
  let content = solution.mixedWords();

  let wordForComparing = solution._modifierWords(contentElement.word)
  wordForComparing =  wordForComparing.split(' ')

  const choiceWords = (e) => {
    let target = e.target;
    target.remove();  
    setPreviousWords(target.textContent)
  }
  let contentFromProps; 
    if(content.length !== 0){
       contentFromProps = content.map((word, index) => <span className = {style.choiceWords + " " + style.choiceWordsActive} key = {index} onClick = {choiceWords}>{word}</span>)
    } 
 
  const nextCard = () => {
    activateComparing(false); 
    showWords(); 
  }
  const wrongAnswer = () => {
    addNewList(contentWithCard[indexCard]);
    activateComparing(false);
    showWords();
    countWordsThunk('countWords');
  }
  const repeatListHere = () => {
    repeatList(true);
    activateComparing(false)
  }
  return (
    <div className = {style.puzzleMode}>
    { !stateStatus
     ? <> { !activateComparingValue ? <div className = {style.contentFromState}>
                                      <ContentFromState content = {wordForComparing} showWords = {showWords}/>  
                                      {contentFromProps}
                                      </div> 
                                    : <button className = {statusPuzzlePage ? style.classTrue : style.classFalse} onClick = {statusPuzzlePage ? nextCard : wrongAnswer }>{ statusPuzzlePage ? "Правильно" : "Не правильно"}</button>}</>
     :  <> {<div><button onClick = {() => repeatList(false)}>Ні</button><button onClick = {repeatListHere}>Так</button></div> }</>
    }

    </div>
  )
}
const mapStateToProps = state => {
  return {
    puzzleWords: state.storagePage.puzzleWords,
    activateComparingValue: state.storagePage.activateComparingValue,
    statusPuzzlePage: state.storagePage.statusPuzzlePage,
    contentWithCard: state.storagePage.contentWithCard
  }
}

export default connect(mapStateToProps, {setPuzzleWords, setPreviousWords, activateComparing})(PuzzleMode);