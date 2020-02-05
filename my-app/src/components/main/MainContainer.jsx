import React from 'react';
import { connect } from 'react-redux';
import Main from './Main';
import { statusActive } from '../redux/main-reducers';
import { statusDeactivate } from '../redux/header-reducer';

const mapStateToProps = (state) => {
  return {
    status: state.headerPage.status
  }
}

const MainContainer = connect(mapStateToProps,  {statusDeactivate} )(Main);
export default MainContainer;