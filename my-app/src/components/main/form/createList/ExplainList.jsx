import React from 'react'; 
import style from './CreateList.module.css';

const ExplainList = ({updateFlag}) => {
  const startUpdateFlag = () => {
    updateFlag(5); 
  } 
  return(
    <div className = {style.explainList}>
     Ваш список поки що пустий.<br/> Почніть його заповнення прямо зараз натиснувши <span onClick = {startUpdateFlag}>сюди</span>.
    </div>  

  )
}
export default ExplainList;