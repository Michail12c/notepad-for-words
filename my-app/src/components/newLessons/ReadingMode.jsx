import React from 'react'
import style from './NewLessons.module.css'

const ReadingMode = () => {
  return(
    <div>
       <div>
        <b>Цей розділ знаходиться на стадії розробки </b>  
       </div>
       <img className = {style.warning} src="https://www.nasemesto.rs/wp-content/uploads/2019/05/radovi-na-putu.jpg" alt=""/>
    </div>
  )
}

export default ReadingMode 