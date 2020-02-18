import React, { useState, useEffect } from 'react';
import style from './Card.module.css';
import { Redirect } from 'react-router-dom';
import Preloader from '../common/Preloader';


class Card extends React.Component {

  constructor(props){
    super(props)
    this.content = this.props.content[0]
    this.listWordsTwo = this.props.listWordsTwo
    this.listUser = this.props.listUser
    this.centralContentActive = ''
  }
  state = {
    status: false,
    redirect: false,
    flag: false
  }
  componentDidMount(){
    if(this.listUser.length != 0){
      this.props.updateItemList(2);
    }
  }
   showWords = () => {
     let a;
     switch (this.props.itemList){
       case 0:
         a = this.props.content[0].length - 1
         this.centralContentActive = this.props.content[0] 
         break
       case 1:
         a =  this. props.listWordsTwo.length - 1
         this.centralContentActive = this.props.listWordsTwo
         break
       case 2: 
         a = this.props.listUser.length - 1
         this.centralContentActive = this.props.listUser  
     }
     let b = this.props.indexCard;

     console.log(a, b)
    if( a == b){
      this.setState({
        status: true
      })
     this.props.setIndexCard(0);
       return
     }
    this.props.setIndexCard(b + 1); 
  }
  addNewList(wordTwo){
    this.props.addWordsThunkTwoList(wordTwo)
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
          content = {this.props.content[0][this.props.indexCard]}
          listWordsTwo = {this.props.listWordsTwo[this.props.indexCard]}
          flag = {this.state.flag}
          updateFlag = {this.updateFlag}
          itemList  = {this.props.itemList}
          listUser = {this.props.listUser[this.props.indexCard]}
          />
       : <div>Cписок закінчився. Бажаєте повторити?</div>
       }
    </div>
    <div className = {style.choiceMenu}>
      {!this.state.status 
      ?  <button onClick= {() => { this.showWords()
        this.addNewList(this.centralContentActive[this.props.indexCard]) }} >Повторити</button>
      : <button  onClick = {() => this.setState({redirect: true}) }>Ні</button>}

      {!this.state.status 
       ? <button onClick= {this.showWords}>Памятаю</button>
      : <button onClick = {() => {this.setState({status: false})}}>Так</button>}
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