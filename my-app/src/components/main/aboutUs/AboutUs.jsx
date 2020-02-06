import React from 'react';
import style from './../Main.module.css';
import success from './../../images/sukses.jpg';
import word from './../../images/word2.jpg';
import training from './../../images/training.jpg';
import games from './../../images/games.jpg';

const AboutUs = (props) => {
  return (
    <div className={style.aboutUs}>
      <a name = {'aboutUs'}></a>
      <h2>Про нас</h2>

      <div className={style.test}>
        <div className={style.innerTest}>
          <h3> Наші цілі</h3>
          <p>Ми усі різні. Але маємо одну ціль - вивчити англійську. Тому ми прагнемо створити таке середовище в якому кожен зможе коригувати навчальну програму під свої індивідуальні особливості.</p>
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
          <h3> Наші цілі</h3>
          <p>Ми усі різні. Але маємо одну ціль - вивчити англійську. Тому ми прагнемо створити таке середовище в якому кожен зможе коригувати навчальну програму під свої індивідуальні особливості.</p>
        </div>
      </div>

      <div className={style.test}>
        <div className={style.innerTest}>
          <h3> Наші цілі</h3>
          <p>Ми усі різні. Але маємо одну ціль - вивчити англійську. Тому ми прагнемо створити таке середовище в якому кожен зможе коригувати навчальну програму під свої індивідуальні особливості.</p>
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
          <h3> Наші цілі</h3>
          <p>Ми усі різні. Але маємо одну ціль - вивчити англійську. Тому ми прагнемо створити таке середовище в якому кожен зможе коригувати навчальну програму під свої індивідуальні особливості.</p>
        </div>
      </div>
  </div>
  )
}

export default AboutUs;