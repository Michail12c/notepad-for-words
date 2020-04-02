import React from 'react'; 
import style from './NewLessons.module.css'; 
import TopSection from '../top_section/TopSection';
import { useState } from 'react';
import UpdateContent from './UpdateContent';

const NewLessons = () => {

  const [statusContent, setStatusContent] = useState(0); 

  return (
    <div className = {style.newLessons}>
      <TopSection logo= {'logo'} calculate = {'calculate'}/>
      <div>
         {statusContent === 0 
              ? <BasicContent setStatusContent = {setStatusContent}/> 
              : <UpdateContent statusContent = {statusContent}
                                setStatusContent = {setStatusContent}/>}
      </div>
      <div>
      </div>
    </div>
  )
}

const BasicContent = ({setStatusContent}) => {
 return(
  <div className = {style.basicContent}>
     <div className = {style.title}>
        <h3>Додаткові вправи</h3>
        <p>Виберіть одну із вправ.</p>
        <p>Тут пояснення кожної вправи на читання сприйняття на слух і розвитку інтуїції</p>
     </div>
     <div className = {style.choiceLesson}>
        <div>
          <div>Читання</div>
           <img onClick = { () => setStatusContent(1)} src="https://cdn.shopify.com/s/files/1/0882/3478/articles/Book_Log_1400x.progressive.jpg" alt="logo"/>
        </div>
        <div>
        <div>Складання тексту</div>
          <img onClick = { () => setStatusContent(2)} src="https://i.pinimg.com/originals/7c/b6/58/7cb658debee086cb625fee0d9dd44de9.jpg" alt="logo"/>
        </div>
        <div>
          <div>Відео</div>
          <img onClick = { () => setStatusContent(3)} src="https://image.freepik.com/free-photo/_23-2148397784.jpg" alt="logo"/>
        </div>
     </div>
  </div>
 )
}



export default NewLessons; 