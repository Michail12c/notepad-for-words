import React, { useEffect } from 'react';
import style from './NewLessons.module.css'
import { connect } from 'react-redux';
import { useState } from 'react';
import TextButtons from '../material/button2';
import Flip from 'react-reveal/Flip';
import Fade from 'react-reveal/Fade';
import { HandlerResponse } from '../common/handlerResponse';
import { InteractionWithLocalStorage } from '../common/handlers';
import { setListLesson, countWordsThunk } from '../redux/main-reducers';


const ChoiceWords = ({listWords, countWordsThunk}) => {
  const [statusContent, setStatusContent] = useState(false) 
  let helper = new InteractionWithLocalStorage('choiceWords')
  let handler = new HandlerResponse('', '')
   console.log()
    if(!localStorage.getItem('choiceWords')){
      listWords.forEach(item => helper.addLocalStorage(item))
    }

  const [listChanged, setListChanged] = useState(JSON.parse(localStorage.getItem('choiceWords')))
  let newMas =  handler.shuffle(listChanged).filter((el, index) => index <= 4)
  let controlWord = newMas[handler.randomInteger(0, 4)]

  const setList = () => {
    setListChanged(JSON.parse(localStorage.getItem('choiceWords')))
  }
 console.log(listWords)
  const connectWithLocalSt = (elem) => {
    helper.updateLocalStorage(elem)
  }

 
  return (
    <div className = {style.titleMode}>
       { !statusContent
           ? <TextButtons callback = {() => setStatusContent(true)} title= {'Почати'}/>
           : <ShowList listWords = {listWords} 
                       setStatusContent = { () => setStatusContent(false)}
                       newMas = {newMas}
                       controlWord = {controlWord}
                       connectWithLocalSt = {connectWithLocalSt}  
                       setList= {setList} 
                       countWordsThunk = {countWordsThunk}/>
       } 
    </div>
  )
}

class ShowList extends React.Component {
 constructor(props){
   super(props)
   this.handler = new HandlerResponse('', '')
   this.listWords = props.listWords 
   this.state = { 
     activeAnimate: true,
     newMas: props.newMas,
     controlWord: props.controlWord,
     counter: 0 
    }
   this.listRefOne = React.createRef()
   this.listRefTwo = React.createRef()
   this.listRefThree = React.createRef()
   this.listRefFour = React.createRef()
   this.listRefFive = React.createRef()
 }
 componentDidUpdate(){
  if(this.state.counter === 6) {
    this.props.setStatusContent()
    localStorage.removeItem('choiceWords')
  }
 }

 componentWillUnmount(){
    localStorage.removeItem('choiceWords')
 }

  showList(){
     let list = <Fade top cascade><div className = {style.showList}><span ref = {this.listRefOne} key = {0} onClick = {this.choiceWordsFn} data-word= {this.state.newMas[0].translate}>{this.state.newMas[0].word}</span>
       <span ref = {this.listRefTwo} key = {1} onClick = {this.choiceWordsFn} data-word= {this.state.newMas[1].translate}>{this.state.newMas[1].word}</span>
       <span ref = {this.listRefThree} key = {2} onClick = {this.choiceWordsFn} data-word= {this.state.newMas[2].translate}>{this.state.newMas[2].word}</span>
       <span ref = {this.listRefFour} key = {3} onClick = {this.choiceWordsFn} data-word= {this.state.newMas[3].translate}>{this.state.newMas[3].word}</span>
       <span ref = {this.listRefFive} key = {4} onClick = {this.choiceWordsFn} data-word= {this.state.newMas[4].translate}>{this.state.newMas[4].word}</span></div>
       </Fade>
    return list
  }

 
  choiceWordsFn = (e) => {
    const value = e.target.dataset.word
    let masRef = [this.listRefOne, this.listRefTwo, this.listRefThree, this.listRefFour, this.listRefFive]
    let indexActiveOfWordWithList = this.listWords.findIndex(item => item.translate == value)
    let statusAnswer = this.handler._comparison(value, this.state.controlWord.translate)
    if(statusAnswer) this.props.connectWithLocalSt(this.listWords[indexActiveOfWordWithList]) 
    this.setState({activeAnimate: false})
    e.target.style.backgroundColor = !statusAnswer ? 'rgb(158, 86, 86' : 'green'
    if(!statusAnswer){
      let trueWord = masRef.find(item => item.current.dataset.word === this.state.controlWord.translate)
     setTimeout(() => {
        trueWord.current.style.backgroundColor = 'green'
      }, 400)
   
    }
    this.changeList(masRef, statusAnswer)
    this.props.setList()
  }
  
  changeOnDefault = () => {
    this.setState({activeAnimate: false})
    let masRef = [this.listRefOne, this.listRefTwo, this.listRefThree, this.listRefFour, this.listRefFive]
    let trueWord = masRef.find(item => item.current.dataset.word === this.state.controlWord.translate)
    trueWord.current.style.backgroundColor = 'green'
    this.changeList(masRef)
    this.props.setList()
  }

  changeList = (arr, value = false) => {
    this.props.countWordsThunk('countLearningWords')
    if(!value){
      this.props.countWordsThunk('countWords')  
    }
    setTimeout(() => {
      arr.forEach(item => item.current.style.backgroundColor = 'rgba(125, 183, 221, 0.5)')
      this.setState({
        activeAnimate: true,
        newMas: this.props.newMas,
        controlWord: this.props.controlWord,
        counter: this.state.counter + 1 
      })
    }, 1000) 
  }

  render(){
    return(
      <div className = {style.mainSectionTranslate}>
         <div className = {style.counter}>
            {`${this.state.counter} з 5`}
         </div>
          <h4>Виберіть правильний переклад</h4>      
        {
          this.state.activeAnimate 
             ? <Timer value = {15}  callback = {this.changeOnDefault}/> 
             : 'Timer'
        }
        <div className ={this.state.activeAnimate ? 'listAnimate' : ''}>    
            {this.showList()}
         </div>
        <div className = {style.controlWord}>
          <Flip right>
             <span>{this.state.controlWord.translate}</span>
          </Flip>
        </div>
      </div> 
    )
  }

}

 const Timer = ({value, callback}) => {
  const [time, setTime] = useState(value)
  
   useEffect(() => {
     if(time > 0){
       setTimeout(() => {
          setTime(time - 1)
          return
      }, 1000)
      } else{
        callback()
      }
     })




  return (
    <div className = {style.timer}>
       {time}
    </div>
  )
}

const  mapStateToProps = state => {
  return{
   
  }
}


export default connect(mapStateToProps, {countWordsThunk})(ChoiceWords)