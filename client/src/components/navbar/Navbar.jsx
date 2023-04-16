import React, {useState} from 'react';
import './navbar.css';
import {RiMenu3Line, RiCloseLine} from 'react-icons/ri';
import officiallogo from '../../assets/officiallogo.png'
const Menu = () =>(
  <>
    <p><a href = "#home"> Home</a></p>
    <p><a href = "#functions"> Functionality</a></p>
    <p><a href = "#start"> Getting Started</a></p>
    <p><a href = "#charts"> Top Charts</a></p>
    <p><a href = "#vote"> Vote</a></p>
  </>
)
const Navbar = () => {
  //toggleMenu = true if showing mobile menu, false otherwise
  //setToggleMenu = function that can change the variable
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className = 'barhop__navbar'>
      <div className = 'barhop__navbar-links'> 
        <div className = 'barhop__navbar-links-logo'>
          <img src = {officiallogo} alt = "logo"/>
        </div>
        <div className = "barhop__navbar-links_container">
          <Menu/>
        </div>
      </div>
      <div className = "barhop__navbar-menu">
        {toggleMenu
        ? <RiCloseLine color = "#fff" size = {27} onClick = {() => setToggleMenu(false)}/>
        :<RiMenu3Line color = "#fff" size = {27} onClick = {() => setToggleMenu(true)}/>
        }
        {toggleMenu && (
          <div className = "barhop__navbar-menu_container scale-up-center">
            <div className = "barhop__navbar-menu_container-links">
              <Menu/>
            </div>
          </div>
        )
        }
      </div>
    </div>
  )
}

export default Navbar
