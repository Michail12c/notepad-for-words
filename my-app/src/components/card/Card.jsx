import React, { useState, useEffect } from 'react';
import style from './Card.module.css';
import { Redirect } from 'react-router-dom';


class Card extends React.Component {

  state = {
    index: 0,
    status: false,
    redirect: false
  }

   showWords = () => {
     let a = this.props.content.length - 1;
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

  addNewList(){
    console.log('hello')
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
  
  render(){
    if(this.state.redirect) return <Redirect to = '/'/>
   return( 
   <div className = {style.card}>
    <div className = {style.content}>
      { !this.state.status 
      ? this.props.content[this.state.index].word
       : <div>Cписок закінчився. Бажаєте повторити?</div>
       }
    </div>
    <div className = {style.choiceMenu}>
      {!this.state.status 
      ? <button onClick= {this.showWords}>Повторити</button> 
      : <button onClick = {this.redirect}>Ні</button>}

      {!this.state.status 
       ? <button onClick= {() => { this.showWords() 
        this.addNewList() }} >Пам`ятаю</button>
      : <button onClick = {this.restart}>Так</button>}
    </div>
  </div>
    )
  }
}

export default Card;