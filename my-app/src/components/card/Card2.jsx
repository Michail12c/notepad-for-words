import React, { useState, useEffect } from 'react';
import style from './Card.module.css';
import { Redirect } from 'react-router-dom';
import Preloader from '../common/Preloader';


class Card2 extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      status: false,
      redirect: false,
      flag: false, 
      index: 0
    }
    this.centralContentActive = ''
  }
/*   state = {
    status: false,
    redirect: false,
    flag: false, 
    index: 0
  } */
 

   showWords = () => {
     let a; 
     switch (this.props.itemList){
       case 0:
         this.centralContentActive = this.props.content[0] 
         break
       case 1:
         this.centralContentActive = this.props.listWordsTwo
         break
       case 2: 
         this.centralContentActive = this.props.listUser  
     }
     return this.centralContentActive
  }
  componentDidUpdate(){
   this.showWords();

  }

  addNewList = (wordTwo) => {
    if (this.props.itemList === 1){
      this.props.removeWordsFromListThunk(wordTwo, 'word2')
      this.props.setIndexCard(this.props.indexCard); 
     /*  this.showWords() */
      return
    }
 
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
  test = () => {
    this.setState({
      status: false
    })
    if(this.props.listWordsTwo.length == 0){
      this.props.updateItemList(0);
     }
  }
  test2 = (el) => {
    this.addNewList(this.centralContentActive[el])
    this.showWords()
  }

  changeWords = (statusWords) => {
    let a = this.state.index + 1; 
    let c = this.props.content[0].length - 1;
      if(c >  this.state.index){
        this.setState({
          index: a
        })
        return
      }
      if(a > c){
        this.setState({
          status: true
        })
        this.setState({
          index: 0
        })
        return
      }

    console.log(this.state.index)
    console.log(c)
  }

  changeWordsTwo = () => {
    let wordList = this.props.content[0];
    let indexCard = this.state.index;
     wordList.splice(indexCard, 1);
    this.changeWords();
    console.log(indexCard)
    console.log(wordList)
    

  }
  render(){
    if(this.state.redirect) return <Redirect to = '/'/>
    if(this.props.content == '') return <Preloader/>
 
   return( 
   <div className = {style.card}>
    <div className = {style.content}>
      { !this.state.status 
      ?  <Content 
          content = {this.props.content[0][this.state.index]}
          listWordsTwo = {this.props.listWordsTwo[this.state.index]}
          flag = {this.state.flag}
          updateFlag = {this.updateFlag}
          itemList  = {this.props.itemList}
          listUser = {this.props.listUser[this.state.index]}
          />
       : <div>Cписок закінчився. Бажаєте повторити?</div>
       }
    </div>
    <div className = {style.choiceMenu}>
      {!this.state.status 
      ?  <button onClick= { () =>  this.changeWordsTwo() }>Повторити</button>
      : <button  onClick = {() => this.setState({redirect: true}) }>Ні</button>}

      {!this.state.status 
       ? <button onClick= { () => this.changeWords() }>Памятаю</button>
      : <button onClick = {this.test}>Так</button>}
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

export default Card2;