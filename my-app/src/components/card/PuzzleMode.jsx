import React from 'react';
import style from './Card.module.css'; 
import { useState } from 'react';

const PuzzleMode = ({contentElement, showWords, repeatList, stateStatus}) => {
  const [puzzleState, setPuzzleState] = useState('')
  let contentFromState = puzzleState
  let content = contentElement.word.trim().replace(/[?!\.]/g, '')
  console.log(content)
  return (
    <div className = {style.puzzleMode}>
      <div>
        {contentFromState}
      </div>
       Hello, this is new content
    </div>
  )
}

export default PuzzleMode; 