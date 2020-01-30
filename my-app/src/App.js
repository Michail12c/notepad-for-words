import React, { useState } from 'react';
import './App.css';
import MainContainer from './components/main/MainContainer';
import { Route, Switch } from 'react-router-dom';
import LessonContainer from './components/lessons/LessonContainer';
import AddWordsForm from './components/main/form/Form';
import { connect } from 'react-redux';
import { initializeMain } from './components/redux/main-reducers';


const App = (props) => {
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


export default App;
