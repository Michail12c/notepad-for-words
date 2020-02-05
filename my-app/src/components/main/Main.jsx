import React, { useState } from 'react';
import style from './Main.module.css';
import Menu from '../menu/Menu';
import HeaderContainer from '../header/HeaderContainer';
import arrow from './../images/arrow.png';


const Main = ({status, statusDeactivate}) => {
 const newStatus = () => {
   statusDeactivate();
 }
  return (
    <div className={style.main} >
      <HeaderContainer/>
      <div className = {style.fieldActive} onClick = {newStatus} >
      <div className ={style.mainMenu} >
       {!status ? <Title/> : <Menu/>  }
      </div>
      </div>

    </div>
  )
}
const Title = (props) => {
  let [index, setIndex] = useState(0);

  let arrImages = ['...створювати власні списки для вивчення слів', '...додавати до списків  будь які слова і фрази', '...налаштувати зручний режим для вивчення іноземних слів', '...граючись розширювати свій словниковий запас', '...розробити індивідуальну навчальну програму']; 

 const indexPlus = () => {
  setIndex(index + 1);
  if(index >= arrImages.length - 1){
   setIndex(0)
  }
 }

 const indexMinus = () => {
  setIndex(index - 1);
  if(index <= 0 ){
    setIndex(arrImages.length - 1)
  }
 }

  return(
    <div className = {style.title}>
      <div onClick = {indexPlus}>
        <img  className = {style.arrow} src= {arrow} alt="icon"/>
      </div>
      <div className = {style.content}>
        <span>З нами ви зможете...</span>
       <div className = {style.arrImages}>{arrImages[index]}</div>  
      </div>
      <div onClick = {indexMinus}>
        <img className = {style.arrow2} src= {arrow} alt="icon"/>
      </div>
    </div>
  )
}

export default Main;