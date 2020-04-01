import React, { useState } from 'react';
import style from './../Main.module.css';
 
const Title = (props) => {
  const [index, setIndex] = useState(0);


  let arrImages = ['...створювати власні списки для вивчення слів', '...додавати до списків  будь які слова і фрази', '...налаштувати зручний режим для вивчення іноземних слів', '...граючись розширювати свій словниковий запас', '...розробляти індивідуальну навчальну програму'];

  const indexPlus = () => {
    setIndex(index + 1);
    if (index >= arrImages.length - 1) {
      setIndex(0)
    }
  }

  const indexMinus = () => {
    setIndex(index - 1);
    if (index <= 0) {
      setIndex(arrImages.length - 1)
    }
  }
  return (
    <div className={style.title}>
      <div onClick={indexPlus}>
        <div className={style.arrow}></div>
      </div>
      <div className={style.content}>
        <div>
        <span >З нами ви точно зможете...</span>
        <div className={style.arrImages}>{arrImages[index]}</div>
      </div>
        <div className={style.road}>Дорога в тисячу лі починається з першого лі...</div>
      </div>
      <div onClick={indexMinus}>
        <div className={style.arrow1}></div>
      </div>
    </div>
  )
}

export default Title;