import React from 'react';
import Lesson from './Lesson';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    content: state.mainPage.listWords
  }
}

const LessonContainer = connect(mapStateToProps, {})(Lesson);
export default LessonContainer;