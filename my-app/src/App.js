import React, { useState } from 'react';
import './App.css';
import MainContainer from './components/main/MainContainer';
import { Route, Switch } from 'react-router-dom';
import LessonContainer from './components/lessons/LessonContainer';
import AddWordsForm from './components/main/form/Form';
import { connect } from 'react-redux';
import { initializeMain } from './components/redux/main-reducers';


const App = (props) => {
  if(props.listWords == ''){
    props.initializeMain('word');
    props.initializeMain('word2');
  }
  return (
      <div className="App">
        <Switch>
         <Route exact path = "/" render = { () => <MainContainer/>} />
         <Route path = "/Lesson" render = { () => <LessonContainer/> } />
         <Route path = "/AddWordsForm" render = { () => <AddWordsForm/> } />
        </Switch>
      </div>
  );
}

const mapStateToProps = (state) => {
  return{
    listWords:state.mainPage.listWords
  }
}
export default connect(mapStateToProps, {initializeMain})(App);
