import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import { statusActive } from '../redux/header-reducer';

const mapDispatchToProps = (dispatch) => {
  return {
    setStatus: () => {
      dispatch(statusActive());
    }
  }
}
const HeaderContainer = connect(null, mapDispatchToProps)(Header);
export default HeaderContainer;