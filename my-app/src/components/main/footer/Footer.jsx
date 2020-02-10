import React from 'react';
import style from './../Main.module.css';
import facebook from './../../images/facebook.png';
import linkedin from './../../images/Linkedin.png';
import git from './../../images/git.png';
import skype from './../../images/skype.png';
import viber from './../../images/viber.png';
import telegram from './../../images/telegram.png';

const Footer = (props) => {
  return(
    <div className = {style.lineStart}>
    <div className = {style.footer}>
    <div className = {style.myData}>
    <div>
      <img src= {skype} alt="icon"/> <span>Михайло Цьома</span>
    </div>
    <div>
      <img src= {viber} alt="icon"/> <span>+380989783041  Михайло Цьома </span> 
    </div>
    <div>
      <img src= {telegram} alt="icon"/> <span>Michail C. +380 98 978 30 41</span>
    </div>
    </div>

    <div className = {style.rightBlock}>
       Ми у соцмережах
       <div className = {style.socialNetwork}>
{/*          <div>
          <a href="https://www.facebook.com/profile.php?id=100017700070396" target = '_blank'><img src= {facebook} alt="icon"/></a> 
        </div> */}
         <div>
           <a href="https://www.linkedin.com/feed/" target = '_blank'><img src= {linkedin} alt="icon"/></a>
          </div>
         <div>
           <a href="https://github.com/Michail12c" target = '_blank'><img src= {git} alt="icon"/></a>
         </div>
        </div>
    </div>
   </div>
   <p className = {style.endLine}>Michailo Tsoma 2020</p>
   </div>
  )
}
export default Footer;