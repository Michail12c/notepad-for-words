import React, { useState, useEffect } from 'react';
import style from './Card.module.css';
import { Redirect } from 'react-router-dom';
import Preloader from '../common/Preloader';


class Card extends React.Component {

  constructor(props){
    super(props);
    this.content = this.props.content[0]
    this.listWordsTwo = this.props.listWordsTwo
    this.listUser = this.props.listUser
    this.centralContentActive = ''
  }
  state = {
    index: 0,
    status: false,
    redirect: false,
    flag: false,
    itemList: 0 
  }
  componentDidMount(){
    if(this.listUser.length != 0){
      this.setState({
        itemList: 2
      })
    }
  }
   showWords = () => {
     let a;
     switch (this.state.itemList){
       case 0:
         a = this.content.length - 1
         this.centralContentActive = this.content 
         break
       case 1:
         a =  this. listWordsTwo.length - 1
         this.centralContentActive = this.listWordsTwo
         break
       case 2: 
         a = this.listUser.length - 1
         this.centralContentActive = this.listUser  
     }
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
    if(this.props.content == '') return <Preloader/>
   return( 
   <div className = {style.card}>
    <div className = {style.content}>
      { !this.state.status 
      ?  <Content 
          content = {this.content[this.state.index]}
          listWordsTwo = {this.listWordsTwo[this.state.index]}
          flag = {this.state.flag}
          updateFlag = {this.updateFlag}
          itemList  = {this.state.itemList}
          listUser = {this.props.listUser[this.state.index]}
          />
       : <div>Cписок закінчився. Бажаєте повторити?</div>
       }
    </div>
    <div className = {style.choiceMenu}>
      {!this.state.status 
      ?  <button onClick= {() => { this.showWords()
        this.addNewList(this.centralContentActive[this.state.index]) }} >Повторити</button>
      : <button onClick = {this.redirect}>Ні</button>}

      {!this.state.status 
       ? <button onClick= {this.showWords}>Памятаю</button>
      : <button onClick = {this.restart}>Так</button>}
    </div>
  </div>
    )
  }
}

const Content = ({content, flag, updateFlag, listWordsTwo, itemList, listUser}) => {
  const openTranslate = () => {
    updateFlag(true)
  }
  const closeTranslate = () => {
    updateFlag(false)
  }
  let activeContent;
  switch (itemList){
    case 0:
     activeContent = content
     break
    case 1:
     activeContent = listWordsTwo  
     break
    case 2:
    activeContent = listUser
    break 
  }
  return(
    <div className = {style.innerContent}>
      <div>{ !flag ? activeContent.word : activeContent.transfer}</div>
      { !flag 
        ? <button onClick = {openTranslate}>Показати переклад</button> 
        : <button onClick = {closeTranslate}>Сховати переклад</button> 
      }
    </div>
  )
}

export default Card;