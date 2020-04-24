import React from 'react'
import style from './NewLessons.module.css'
import Container from '@material-ui/core/Container';
import { useState } from 'react';
import { useDebugValue } from 'react';
import MediaCard from '../material/card';
import translateList from '../common/translateMode.json'; 
import ChoiceWords from './ChoiceWords';

const TranslateMode = () => {

  const [statusModeTranslate, setStatusMode] = useState(false)
  const [choiceList, activeChoice] = useState(0)

  let content = translateList[0].map((el, index) => <MediaCard key={index} width={200} height={150} img = {el.img} content = {el.name} callback = {() => setStatusMode(true)} cardHeight= {350} choiceVideo = {''} setValueTwo = {() => activeChoice(index)}/> )
  
  return(
    <div className = {style.translateMode}>
       { !statusModeTranslate
           ? <div>
              <h4>Оберіть список для тренування</h4> 
                <div className = {style.listTrainee}>
                  {content}
              </div>
            </div>
          : <CollectorListsMode choiceList = {choiceList} setStatusMode = {setStatusMode} translateList = {translateList}/>
       }
    </div>
  )
}

const CollectorListsMode = ({choiceList, setStatusMode, translateList}) => {
  let content = ''; 
  switch(choiceList){
    case 0: 
      content = translateList[1]
      break
    case 1: 
      content = translateList[1]
      break
  case 2:
       content = translateList[1]
       break
   case 3:
       content = translateList[1]
       break
   case 4:
      content = translateList[1]
      break 
   default:
      content = translateList[1]
    
          
  }

  return(
    <div>
     <ChoiceWords listWords = {content}/> 
     <button onClick = {() => setStatusMode(false)}>click</button>
    </div>
  )
}

export default TranslateMode