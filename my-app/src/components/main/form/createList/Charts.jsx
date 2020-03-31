import React from 'react'; 
import style from './CreateList.module.css'; 
import { connect } from 'react-redux';
import { countWordsThunk } from '../../../redux/main-reducers';
import Chart from "react-google-charts";

const ChartElement = ({countWordsThunk, countWords, countLearningWords, newList, listWords, listWordsTwo, listUser}) => {

  let mas = [['x', 'mistakes'], [0, 0]];
  let masLearningWords = [['x', 'words'], [0, 0]]; 

  countWords.forEach(elem => mas.push(elem)); 
  countLearningWords.forEach(elem => masLearningWords.push(elem)); 

  const listWordsLength = listWords[0].length; 
  const listUserLength = listUser.length; 
  const listWordsTwoLength = listWordsTwo.length; 
 

  return (
   <div>
         <h4>Кількість слів в яких було зроблено помилку</h4>
       <div className = {style.chart}>
          <Chart  width={'100%'}
                  height={'100%'}
                  chartType="LineChart"
                  data={mas}
                  options={{
                    hAxis: {
                      title: 'Number of days',
                    },
                    vAxis: {
                      title: "The number of words I don't remember",
                    }
                  }}
                  rootProps={{ 'data-testid': '1' }} />
    </div>
    
       <h4>Кількість слів, які було повторено за день</h4>
     <div className = {style.chart}>
     <Chart       width={'100%'}
                  height={'100%'}
                  chartType="LineChart"
                  data={masLearningWords}
                  options={{
                    hAxis: {
                      title: 'Number of days',
                    },
                    vAxis: {
                      title: 'The number of words I repeated',
                    },
                  }}
                  rootProps={{ 'data-testid': '1' }} />
     </div>
    
    <h4>Співвідношення кількості слів в ваших списках</h4>
    <div className={style.chart}>
        <Chart  width={'100%'}
                height={'100%'}
                chartType="PieChart"
                loader={<div>Loading Chart</div>}
                data={[
                  ['Task', 'Hours per Day'],
                  ['Базовий список', listWordsLength],
                  ['Список для повторення', listWordsTwoLength],
                  [`Список  ${newList}`, listUserLength]
                ]}
                options={{
                  title: 'My Daily Activities',
                }}
                rootProps={{ 'data-testid': '1' }}
              />
    </div>

   </div> 
  )
}

const mapStateToProps = state => {
  return{
  countWords: state.mainPage.countWords,
  countLearningWords: state.mainPage.countLearningWords,
  newList: state.mainPage.newList,
  listWords: state.mainPage.listWords,
  listWordsTwo: state.mainPage.listWordsTwo,
  listUser: state.mainPage.listUser,
  }
}


export default connect(mapStateToProps, {countWordsThunk})(ChartElement); 