import React from 'react';
import style from './Card.module.css';
import { connect } from 'react-redux';

const ContentFromState = ({previousWords}) => {
  const deleteWords = () => {
    alert('hello'); 
  }
  let contentForPuzzle = ''; 
  if(previousWords.length !== 0){
     contentForPuzzle = previousWords.map((word, index) => <span className = {style.choiceWords} key = {index} onClick = {deleteWords}>{word}</span>)
  }

  return (
     <> 
       {contentForPuzzle}
     </>
  )
}

const mapStateToProps = state => {
  return{
    previousWords: state.storagePage.previousWords
  }
}

export default connect(mapStateToProps, {})(ContentFromState); 