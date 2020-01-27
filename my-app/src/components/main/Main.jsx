import React from 'react';
import style from './Main.module.css';
import Menu from '../menu/Menu';
import HeaderContainer from '../header/HeaderContainer';

const Main = ({status}) => {
  return (
    <div className={style.main}>
      <HeaderContainer/>
      <div className ={style.mainMenu}>
       {!status ? <div>here will be Content</div> : <Menu/>  }
      </div>
    </div>
  )
}

export default Main;