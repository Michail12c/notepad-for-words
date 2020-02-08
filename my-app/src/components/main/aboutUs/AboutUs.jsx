import React from 'react';
import style from './../Main.module.css';
import success from './../../images/sukses.jpg';
import word from './../../images/word2.jpg';
import training from './../../images/training.jpg';
import games from './../../images/games.jpg';

const AboutUs = (props) => {
  return (
    <div className={style.aboutUs} id = {'aboutUs'}>
      <h2>Про нас</h2>
      <div className={style.test}>
        <div className={style.innerTest}>
          <h3> Мета</h3>
          <p>Ми усі різні. Але маємо спільну ціль - вивчити іноземну мову. Тому ми прагнемо створити таке середовище в якому кожен зможе скоригувати навчальну програму під свої індивідуальні особливості.</p>
        </div>
        <div>
          <img src={success} alt="logo" />
        </div>
        <div className = {style.test2}>
        </div>
      </div>

      <div className={style.test}>
      <div className = {style.test2}>
       </div>
        <div>
          <img src={games} alt="logo" />
        </div>
        <div className={style.innerTest2}>
          <h3>Мотивація</h3>
          <p>Наша віра у цей проект грунтується на усвідомленні того, що тільки те що потрібно тобі самому може стати корисним для інших. Ми довго шукали подібний ресурс для навчання, але так нічого і не знайшовши, вирішили створити самі. Саме тому працюючи для вас ми втілюємо в життя власну мрію.</p>
        </div>
      </div>

      <div className={style.test}>
        <div className={style.innerTest}>
          <h3>Філософія</h3>
          <p>Основою нашого проекту є інтерактивінсть. Розуміння того очевидного факту, що найкращим середовищем для людини може бути тільки те середовище, яке вона сама для себе налаштувала.</p>
        </div>
        <div>
          <img src={training} alt="logo" />
        </div>
        <div className = {style.test2}>
        </div>
      </div>

      <div className={style.test}>
      <div className = {style.test2}>
       </div>
        <div>
          <img src={word} alt="logo" />
        </div>
        <div className={style.innerTest2}>
          <h3>Плани</h3>
          <p>Ми прагнемо постійно розвивати наш проект, додаючи все більшу кількість інструментів, з якими ви легко налаштуєте для себе освітню платформу, що зробить ваше навчання по справжньому продуктивним.</p>
        </div>
      </div>
  </div>
  )
}

export default AboutUs;