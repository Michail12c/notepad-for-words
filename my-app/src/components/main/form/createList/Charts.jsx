import React from 'react';
import style from './CreateList.module.css';
import { connect } from 'react-redux';
import { countWordsThunk } from '../../../redux/main-reducers';
import Chart from "react-google-charts";
import { InteractionWithLocalStorage } from '../../../common/handlers';

const ChartElement = ({ countWordsThunk, countWords, countLearningWords, newList, listWords, listWordsTwo, listUser }) => {
 
  let mas = [['x', 'mistakes'], [0, 0]];
  let masLearningWords = [['x', 'words'], [0, 0]];
  let masSuccess = [['x', '%'], [0, 0]];

  let newArray = new InteractionWithLocalStorage();
  let countWordsNext = newArray.changeArrayInNumber(countWords);
  let countLearningWordsNext = newArray.changeArrayInNumber(countLearningWords);
  let arrSuccess = newArray.definitionOfSuccess(countLearningWords, countWords);
  
  countWordsNext.forEach(elem => mas.push(elem));
  countLearningWordsNext.forEach(elem => masLearningWords.push(elem));
  arrSuccess.forEach((elem, index) => masSuccess.push([index, elem]));

  const listWordsLength = listWords[0].length;
  const listUserLength = listUser.length;
  const listWordsTwoLength = listWordsTwo.length;

  return (
    <div>
      <h4>Кількість слів в яких було зроблено помилку</h4>
      <div className={style.chart}>
        <Chart width={'100%'}
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
      <div className={style.chart}>
        <Chart width={'100%'}
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

      <h4> Графік успішності</h4>
      <div className={style.chart}>
        <Chart width={'100%'}
          height={'100%'}
          chartType="LineChart"
          data={masSuccess}
          options={{
            hAxis: {
              title: 'Number of days',
            },
            vAxis: {
              title: 'Progress learning',
            },
          }}
          rootProps={{ 'data-testid': '1' }} />
      </div>

      <h4>Співвідношення кількості слів в ваших списках</h4>
      <div className={style.chart}>
        <Chart width={'100%'}
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
  return {
    countWords: state.mainPage.countWords,
    countLearningWords: state.mainPage.countLearningWords,
    newList: state.mainPage.newList,
    listWords: state.mainPage.listWords,
    listWordsTwo: state.mainPage.listWordsTwo,
    listUser: state.mainPage.listUser,
  }
}


export default connect(mapStateToProps, { countWordsThunk })(ChartElement); 