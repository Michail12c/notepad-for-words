import React from 'react'; 
import style from './NewLessons.module.css'; 
import ReadingMode from './ReadingMode';
import TranslateMode from './TranslateMode';
import BuildingSentence from './BuildingSentence';
import VideoMode from './VideoMode';

const UpdateContent = ({statusContent, setStatusContent}) => {
  let updateContent; 
  switch(statusContent){
    case 1: 
     updateContent = <ReadingMode/>
     break
    case 2: 
    updateContent = <TranslateMode/>
    break
    case 3:
    updateContent = <BuildingSentence/>
    break  
    case 4:
    updateContent =  <VideoMode/> 
    break 
    default:
      return updateContent = 'new content is default'; 
  }

  return (
    <div>
       {updateContent}
       <div>
         <button className = {style.warningButton} onClick = {() => setStatusContent(0)}>Повернутись в меню</button>
       </div>
    </div>
  )
}
export default UpdateContent; 