import React from 'react';
import * as Redux from 'react-redux';

import './header.scss';

import {Link} from 'react-router-dom';

import {ReactComponent as Logo} from '../../assets/crown.svg';

function Header({currentUser}) {
  console.log(currentUser)

  return (
    <div className='header'>
      <Link className='logo-container' to='/'>
        <Logo className='logo' /> 
      </Link>
      <div className='options'>
        <Link className='option' to='/shop'>SHOP</Link>
        <Link className='option' to='/contact'>CONTACT</Link> 
      </div>
    </div>
  )
}


function mapStateToProps(state) {
console.log(state)  
  return {
    currentUser: state.user.currentUser
  }
}

function mapDispatchToProps() {}

export default Redux.connect(mapStateToProps, mapDispatchToProps)(Header);