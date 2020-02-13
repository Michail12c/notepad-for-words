import React from 'react';
import style from './Main.module.css';
import Menu from '../menu/Menu';
import HeaderContainer from '../header/HeaderContainer';
import Title from './title/Title';
import AboutUs from './aboutUs/AboutUs';
import Contacts from './contacts/Contacts';
import Footer from './footer/Footer';


const Main = ({ status, statusActive}) => {
  const newStatus = () => {
    statusActive(false);
  }
  return (
   <div> 
    <div className={style.main} >
      <HeaderContainer />
      <div className={style.fieldActive} onClick={newStatus} >
        <div className={style.mainMenu} >
          {!status ? <Title/> : <Menu/>}
        </div>
      </div>
    </div>
     <div>
        <AboutUs/>
     </div>
     <div>
       <Contacts/>
     </div>
     <div>
       <Footer/>
     </div>
    </div> 
  )
}


export default Main;