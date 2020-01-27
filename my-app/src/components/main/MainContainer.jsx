import React from 'react';
import { connect } from 'react-redux';
import Main from './Main';
import { statusActive } from '../redux/main-reducers';

const mapStateToProps = (state) => {
  return {
    status: state.headerPage.status
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}


const MainContainer = connect(mapStateToProps, mapDispatchToProps )(Main);
export default MainContainer;