import React from 'react'; 
import style from './CreateList.module.css'; 
import { connect } from 'react-redux';
import { countWordsThunk } from '../../../redux/main-reducers';
import Chart from "react-google-charts";

const ChartElement = ({countWordsThunk, countWords}) => {
  console.log(countWords); 
  let mas = [['x', 'mistakes'], [0, 0]];
  countWords.forEach(elem =>mas.push(elem)); 
  return (
    <div className = {style.chart}>
          <Chart  width={'50vw'}
                  height={'50vh'}
                  chartType="LineChart"
                  data={mas}
                  options={{
                    hAxis: {
                      title: 'Number of days',
                    },
                    vAxis: {
                      title: 'Number of mistakes',
                    },
                  }}
                  rootProps={{ 'data-testid': '1' }} />

    <button onClick = {() => countWordsThunk('countWords')}>click</button> 
    </div>
  )
}

const mapStateToProps = state => {
  return{
  countWords: state.mainPage.countWords
  }
}


export default connect(mapStateToProps, {countWordsThunk})(ChartElement); 