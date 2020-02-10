import React from 'react';
import style from './Settings.module.css';
import TopSection from '../top_section/TopSection';

const Settings = (props) => {
  return (
    <div className = {style.settings}>
      <TopSection/>
       <div>
         <h3>Settings</h3>
       </div> 
    </div>
  )
}

export default Settings;