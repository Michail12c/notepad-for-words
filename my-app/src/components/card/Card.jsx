import React from 'react';
import style from './Card.module.css';
import { Redirect } from 'react-router-dom';
import Preloader from '../common/Preloader';
import StrictCheck from './StrictCheck';
import { connect } from 'react-redux';
import { choiceElementContent } from '../redux/storage-reducer';
import CollectorContent from './CollectorContent';


class Card extends React.PureComponent {

  constructor(props){
    super(props) 
    this.centralContentActive = ''
  }
  state = {
    status: false,
    redirect: false,
    flag: false,
    masWords: []
  }
 

   showWords = () => {
     let a; 
     switch (this.props.itemList){
       case 0:
         a = this.props.content[0].length - 1
         this.centralContentActive =  this.props.content[0] 
         break
       case 1:
         a =  this. props.listWordsTwo.length - 1
         this.centralContentActive =  this.props.listWordsTwo
         break
       case 2: 
         a = this.props.listUser.length - 1
         this.centralContentActive = this.props.listUser  
     }
     let b = this.props.indexCard;
     console.log(a, b)
     if( a  > b){
      this.props.setIndexCard(b + 1); 
      return
     }
     if( a < b){
      this.props.setIndexCard(0);
      return     
    }
    if( a == b ){
      this.setState({
        status: true
      })
     this.props.setIndexCard(0);
       return
     }
    }
 

  addNewList = (wordTwo) => {
    if (this.props.itemList === 1){
      this.setState({send: true})
      this.mas.push(this.props.listWordsTwo[this.props.indexCard])
       this.masNow = [...new Set(this.mas)] 
       this.sendMas();
       if(this.props.indexCard === 0){
        this.props.setIndexCard(0);
        return
       }
       this.props.setIndexCard(this.props.indexCard - 1);
    }
   if(this.props.itemList !== 1){
      this.showWords(); 
    this.props.addWordsThunkTwoList(wordTwo);
   }
  }
 componentDidMount(){
  this.masNow = [];
  this.mas = [];
 }
componentDidUpdate(){
  
}
 sendMas = () => {
   this.masNow.map( item => this.props.removeWordsFromListThunk(item, 'word2')); 
 }
 componentWillUnmount(){
    this.sendMas()  
    this.props.setIndexCard(0);
    this.props.updateItemList(0);
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
  
  repeatList = (val) => {
    if(val){
      this.setState({ status: false})
    }
    if(!val){
      this.setState({redirect: true})
    }
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
          statusLesson = {this.props.statusLesson}
          choiceElementContent = {this.props.choiceElementContent}
          contentElement = {this.props.contentElement}
          />
       : <div>Cписок закінчився. Бажаєте повторити?</div>
       }
    </div>
    <div className = {style.choiceMenu}>
       {this.props.statusLesson === 0 ? <ControlCard stateStatus = {this.state.status}
                                            centralContent = {this.centralContentActive}
                                            indexCard = {this.props.indexCard}
                                            addNewList = {this.addNewList}
                                            itemList = {this.props.itemList}
                                            repeatList = {this.repeatList}
                                            showWords = {this.showWords}/> 
                              : <CollectorContent  contentElement = {this.props.contentElement} 
                                              showWords = {this.showWords} 
                                              repeatList = {this.repeatList}
                                              stateStatus = {this.state.status}
                                              indexCard = {this.props.indexCard}
                                              addNewList = {this.addNewList}  />}
    </div>
  </div>
    )
  }
}

const ControlCard = ({stateStatus, centralContent, addNewList, itemList, repeatList, showWords, indexCard}) => {
  return (
    <div>
      {!stateStatus 
      ?  <button onClick= { () => {
        addNewList(centralContent[indexCard])}
      }>{itemList === 1 ? 'Запам`ятав' :  'Повторити'}</button>
      : <button  onClick = {() => repeatList(false)}>Ні</button>}

      {!stateStatus 
       ? <button onClick= {showWords}>{itemList === 1 ? 'Повторити': 'Пам`ятаю'}</button>
      : <button onClick = {() => repeatList(true)}>Так</button>}
    </div>
  )
}

const Content = ({content, flag, updateFlag, listWordsTwo, itemList, listUser, statusLesson, choiceElementContent, contentElement}) => {
  const openTranslate = () => {
    updateFlag(true)
  }
  const closeTranslate = () => {
    updateFlag(false)
  }
  let activeContent;

  switch (itemList){
    case 0:
     choiceElementContent(content)
     break
    case 1:
     choiceElementContent(listWordsTwo)
     break
    case 2:
    choiceElementContent(listUser)
    break 
  }
  return(
    <div className = {style.innerContent}>
     { statusLesson === 0 ? <div>{ !flag ? contentElement.word : contentElement.transfer}</div> 
                          : <div>{ !flag ? contentElement.transfer : contentElement.word}</div> } 
      { !flag 
        ? <button onClick = {openTranslate}>Подивитись переклад</button> 
        : <button onClick = {closeTranslate}>Сховати переклад</button> 
      }
    </div>
  )
}

const mapStateToProps = state => {
  return {
    contentElement: state.storagePage.content
  }
}
export default connect(mapStateToProps, {choiceElementContent})(Card);