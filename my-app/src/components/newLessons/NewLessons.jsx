import React from 'react'; 
import style from './NewLessons.module.css'; 
import TopSection from '../top_section/TopSection';
import UpdateContent from './UpdateContent';
import Footer from '../main/footer/Footer';
import { connect } from 'react-redux';
import { setStatusContent } from '../redux/lessons-reducer';

const NewLessons = ({statusContent, setStatusContent}) => {
  
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
        <div className = {style.cardActive}>
          <b>Читання</b>
           <img onClick = { () => setStatusContent(1)} src="https://cdn.shopify.com/s/files/1/0882/3478/articles/Book_Log_1400x.progressive.jpg" alt="logo"/>
           <div>
             Вправа розвиває навик роботи з іноземним тестом, збільшує словниковий запас...
           </div>
        </div>
        <div className = {style.cardActive}>
          <b>Переклад</b>
          <img onClick = { () => setStatusContent(2)}  src="https://cdn.mosoah.com/wp-content/uploads/2018/12/30133334/%D8%A7%D9%84%D8%B1%D8%AF-%D8%B9%D9%84%D9%89-%D8%A7%D9%84%D8%B3%D9%81%D9%8A%D9%87.jpg" alt="log"/>
          <div>
            Перевірте свій лексичний запас вибравши вірну відповідь із 5 варіантів. 
          </div>
        </div>
        <div className = {style.cardActive}>
        <b>Складання тексту</b>
          <img onClick = { () => setStatusContent(3)} src="https://i.pinimg.com/originals/7c/b6/58/7cb658debee086cb625fee0d9dd44de9.jpg" alt="logo"/>
          <div>
          Завдання на розвиток памяті та інтуїтивного сприйняття, потрібно відновити текст, як це робили герої Жюль Верна. 
        </div>
        </div>
        <div className = {style.cardActive}>
          <b>Відео</b>
          <img onClick = { () => setStatusContent(4)} src="https://image.freepik.com/free-photo/_23-2148397784.jpg" alt="logo"/>
          <div>
          Тренуйте сприйняття англійської на слух. 
        </div>
        </div>
     </div>
  </div>
 
 )
}

const mapStateToProps = state => {
  return{
    statusContent: state.lessonsPage.statusContent
  }
}


export default connect(mapStateToProps, {setStatusContent})(NewLessons); 