import React from 'react';
import Lesson from './Lesson';
import { connect } from 'react-redux';
import { addWordsThunkTwoList, initializeMain } from '../redux/main-reducers';

const mapStateToProps = (state) => {
  return {
    content: state.mainPage.listWords,
    listWordsTwo: state.mainPage.listWordsTwo
  }
}

const LessonContainer = connect(mapStateToProps, {addWordsThunkTwoList, initializeMain})(Lesson);
export default LessonContainer;