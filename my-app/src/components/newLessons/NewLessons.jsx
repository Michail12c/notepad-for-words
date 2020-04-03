import React from 'react'; 
import style from './NewLessons.module.css'; 
import TopSection from '../top_section/TopSection';
import { useState } from 'react';
import UpdateContent from './UpdateContent';
import Footer from '../main/footer/Footer';

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
      <Footer/>
    </div>
  )
}

const BasicContent = ({setStatusContent}) => {
 return(
  <div className = {style.basicContent}>
     <div className = {style.title}>
        <h3>Додаткові вправи</h3>
     </div>
     <div className = {style.choiceLesson}>
        <div>
          <div>Читання</div>
           <img onClick = { () => setStatusContent(1)} src="https://cdn.shopify.com/s/files/1/0882/3478/articles/Book_Log_1400x.progressive.jpg" alt="logo"/>
           <div>
             Ця вправа розвиває навик розуміння тесту, збільшу словниковий запас...
           </div>
        </div>
        <div>
          <div>Переклад слова</div>
          <img onClick = { () => setStatusContent(2)}  src="https://cdn.mosoah.com/wp-content/uploads/2018/12/30133334/%D8%A7%D9%84%D8%B1%D8%AF-%D8%B9%D9%84%D9%89-%D8%A7%D9%84%D8%B3%D9%81%D9%8A%D9%87.jpg" alt="log"/>
          <div>
            Перевірте свій словниковий запас вибравши вірну відповідь із 4 варіантів. 
          </div>
        </div>
        <div>
        <div>Складання тексту</div>
          <img onClick = { () => setStatusContent(3)} src="https://i.pinimg.com/originals/7c/b6/58/7cb658debee086cb625fee0d9dd44de9.jpg" alt="logo"/>
          <div>
          Завдання на розвиток памяті та інтуїтивного сприйняття, потрібно відновити текст, як це робив Паганель чи Дюпен у По. 
        </div>
        </div>
        <div>
          <div>Відео</div>
          <img onClick = { () => setStatusContent(4)} src="https://image.freepik.com/free-photo/_23-2148397784.jpg" alt="logo"/>
          <div>
          Тренуйте сприйняття англійського на слух. 
        </div>
        </div>
     </div>
  </div>
 
 )
}



export default NewLessons; 