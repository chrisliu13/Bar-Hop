import React from 'react';
import './navbar.css';
import {RiMenu3Line, RiCloseLin} from 'react-icons/ri';
import logo from '../../assets/logo.svg'
const Navbar = () => {
  return (
    <div className = 'barhop__navbar'>
      <div className = 'barhop__navbar-links'>
        <div className = 'barhop__navbar-links-logo'>
          <img src = {logo} alt = "logo"/>
        </div>
        <div className = "barhop__navbar-links_container">
          <p><a href = "#home"> Home</a></p>
          <p><a href = "#functions"> Functionality</a></p>
          <p><a href = "#start"> Getting Started</a></p>
          <p><a href = "#charts"> Top Charts</a></p>
          <p><a href = "#vote"> Vote</a></p>
        </div>
      </div>
    </div>
  )
}

export default Navbar
