import React from 'react'; 
import style from './NewLessons.module.css'; 

const UpdateContent = ({statusContent, setStatusContent}) => {
  let updateContent; 
  switch(statusContent){
    case 1: 
     updateContent = 'new content is my one';
     break
    case 2: 
    updateContent = 'new content 2';
    break
    case 3:
    updateContent = 'new content 3';
    break   
    default:
      return updateContent = 'new content is default'; 
  }

  return (
    <div>
       {updateContent}
       <div>
         <button onClick = {() => setStatusContent(0)}>come back</button>
       </div>
    </div>
  )
}
export default UpdateContent; 