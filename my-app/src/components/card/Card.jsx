import React, { useState, useEffect } from 'react';
import style from './Card.module.css';
import { Redirect } from 'react-router-dom';
import Preloader from '../common/Preloader';


class Card extends React.Component {

  constructor(props){
    
    super(props);
      this.props.initializeMain('word');
      this.props.initializeMain('word2');

  }
  state = {
    index: 0,
    status: false,
    redirect: false,
    flag: false
  }
  
   showWords = () => {
     let a = this.props.content[0].length - 1;
     let b = this.state.index
     console.log(a, b)
    if( a == b){
      this.setState({
        index: 0
      })
      this.setState({
        status: true
      })
      return
     }
    this.setState({
      index: this.state.index + 1
    })
  }

  addNewList(wordTwo){
    this.props.addWordsThunkTwoList(wordTwo)
  }
  restart = () =>{
    this.setState({
      status: false
    })
  }
  redirect = () =>{
    this.setState({
      redirect: true
    })
  }
  updateFlag =(key) => {
    if(key){
      this.setState({
        flag: true
      })}
    if(!key){
      this.setState({
        flag: false
      })}  
  }

  render(){
    if(this.state.redirect) return <Redirect to = '/'/>
    if(this.props.listWordsTwo == '') return <Preloader/>
   return( 
   <div className = {style.card}>
    <div className = {style.content}>
      { !this.state.status 
      ?  <Content 
          content ={this.props.content[0][this.state.index]}
          flag = {this.state.flag}
          updateFlag = {this.updateFlag}/>
       : <div>Cписок закінчився. Бажаєте повторити?</div>
       }
    </div>
    <div className = {style.choiceMenu}>
      {!this.state.status 
      ?  <button onClick= {() => { this.showWords() 
        this.addNewList( this.props.content[this.state.index]) }} >Повторити</button>
      : <button onClick = {this.redirect}>Ні</button>}

      {!this.state.status 
       ? <button onClick= {this.showWords}>Памятаю</button>
      : <button onClick = {this.restart}>Так</button>}
    </div>
  </div>
    )
  }
}

const Content = ({content, flag, updateFlag}) => {
  const openTranslate = () => {
    updateFlag(true)
  }
  const closeTranslate = () => {
    updateFlag(false)
  }
  return(
    <div className = {style.innerContent}>
      <div>{ !flag ? content.word : content.transfer}</div>
      { !flag 
        ? <button onClick = {openTranslate}>Показати переклад</button> 
        : <button onClick = {closeTranslate}>Сховати переклад</button> 
      }
    </div>
  )
}

export default Card;