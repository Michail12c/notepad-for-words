import React from 'react';
import style from './Lesson.module.css';

const Explication = ({itemList, newList}) => {
  return(
    <div className = {style.explication}>
       <div className = {style.title}>Довідка</div>
      {itemList === 0 ?  <div><p>В <b>Режимі уроку</b> ви можете обрати спосіб тренування своїх навиків. У легкому режимі ви повторюєте слова без перевірки. В строгому режимі потрібно ввести точний переклад фрази. В режимі пазлу ви зможете скласти переклад фрази зі слів - підказок </p>
      <p><b>Базовий список </b>містить найбільш поширенні слова і фрази, що використовуються у повсякденному спілкуванні, це той необхідний мінімум, який дозволить `вижити` в іншомовному середовищі.</p>
      <p>Натиснувши кнопку <b>Пам`ятаю</b> ви викликаєте карточку із наступним словом. Кнопка <b>Повторити</b> заносить слово у <b>Список для повторення.</b></p>
      </div> : ''}
      {itemList === 1 ? <div> <p>В <b>Режимі уроку</b> ви можете обрати спосіб тренування своїх навиків. У легкому режимі ви повторюєте слова без перевірки. В строгому режимі потрібно ввести точний переклад фрази. В режимі пазлу ви зможете скласти переклад фрази зі слів - підказок </p>
        <p>У <b>Списку для повторення</b> знаходяться слова, в яких ви робили помилки у інших вправах чи які самі обрали для повторення. Натиснувши кнопку <b>Повторити</b> ви залишаєте слово у цьому списку для подальшого повторення, а також викликаєте наступну картку.</p>
      <p> Кнопка <b>Запам`ятав</b> означає, що ви вивчили слово і воно буде видалене зі списку.</p>
      </div> : ''}
      {itemList === 2 ? <div><p>В <b>Режимі уроку</b> ви можете обрати спосіб тренування своїх навиків. У легкому режимі ви повторюєте слова без перевірки. В строгому режимі потрібно ввести точний переклад фрази. В режимі пазлу ви зможете скласти переклад фрази зі слів - підказок </p><p><b>Список {newList}</b> складається зі слів які ви самостійно додали для вивчення. Як і в Базовому списку кнопка <b>Пам`ятаю</b> викликає карточку із наступним словом. Кнопка <b>Повторити</b> заносить вибране слово у <b>Список для повторення.</b></p>
      </div> : ''}
    </div>
  )
}
export default Explication;
