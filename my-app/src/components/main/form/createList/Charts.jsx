import React from 'react'; 
import style from './CreateList.module.css'; 
import { connect } from 'react-redux';
import { countWordsThunk } from '../../../redux/main-reducers';

const Chart = ({countWordsThunk}) => {
  return (
    <div className = {style.chart}>
      Hello it is charts
      <button onClick = {() => countWordsThunk('countWords')}>click</button>
    </div>
  )
}

const mapStateToProps = state => {
  return{

  }
}

export default connect(mapStateToProps, {countWordsThunk})(Chart); 