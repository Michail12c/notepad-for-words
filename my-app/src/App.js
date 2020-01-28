import React, { useState } from 'react';
import './App.css';
import MainContainer from './components/main/MainContainer';
import { Route, Switch } from 'react-router-dom';
import LessonContainer from './components/lessons/LessonContainer';
import { connect } from 'react-redux';


const App = (props) => {

  return (
      <div className="App">
        <Switch>
         <Route exact path = "/" render = { () => <MainContainer/>} />
         <Route path = "/Lesson" render = { () => <LessonContainer/> } />
        </Switch>
        
        

      </div>
  );
}



export default App;
