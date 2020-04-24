import React from 'react';
import style from './NewLessons.module.css'
import { connect } from 'react-redux';

const ChoiceWords = ({listWords}) => {
  console.log(listWords)
  let list = listWords.map(el => <div>{el.word}</div>)
  return (
    <div>
       {list}
    </div>
  )
}

const  mapStateToProps = state => {
  return{
   
  }
}

export default connect(mapStateToProps, {})(ChoiceWords)