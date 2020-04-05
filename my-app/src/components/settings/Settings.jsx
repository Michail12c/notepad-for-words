import React from 'react';
import style from './Settings.module.css';
import TopSection from '../top_section/TopSection';
import Footer from '../main/footer/Footer';

const Settings = (props) => {
  return (
    <div className = {style.settings}>
      <TopSection/>
       <div className = {style.warningSetting}>
       <div>
        <b>Цей розділ знаходиться на стадії розробки </b>  
       </div>
       <img className = {style.warning} src="https://www.nasemesto.rs/wp-content/uploads/2019/05/radovi-na-putu.jpg" alt=""/>
       </div> 
      <Footer/>
    </div>
  )
}

export default Settings;