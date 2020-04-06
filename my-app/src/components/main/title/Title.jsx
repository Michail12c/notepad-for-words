import React, { useState } from 'react';
import style from './../Main.module.css';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';

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
      <Fade left>
      <div className = {style.indexPlus} onClick={indexPlus}>
        <div className={style.arrow}></div>
      </div>
      </Fade>
      <div className={style.content}>
        <Zoom lef>
        <div>
        <span >З нами ви точно зможете...</span>
          <div className={style.arrImages}>{arrImages[index]}</div>
      </div>
        </Zoom>
        <div className={style.road}>Дорога в тисячу лі починається з першого лі...</div>
      </div>
      <Fade right>
      <div onClick={indexMinus}>
        <div className={style.arrow1}></div>
      </div>
      </Fade>
    </div>
  )
}

export default Title;