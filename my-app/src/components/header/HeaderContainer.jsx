import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import { statusActive } from '../redux/header-reducer';

const mapDispatchToProps = (dispatch) => {
  return {
    setStatus: (value) => {
      dispatch(statusActive(value));
    }
  }
}
const HeaderContainer = connect(null, mapDispatchToProps)(Header);
export default HeaderContainer;