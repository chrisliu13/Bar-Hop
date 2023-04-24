import React, {useState} from 'react'
import './feature.css'
import {RiArrowDropDownLine, RiArrowDropUpLine} from 'react-icons/ri';
const Feature = ({title,text}) => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className = "bh__feature-container__feature">
      <div className = "bh__feature-container__feature-title">
        <div/>
        <h1>
          {title}
          {toggleMenu
          ? <RiArrowDropUpLine className = "drop" color = "#fff" size = {40} onClick = {() => setToggleMenu(false)}/>
          :<RiArrowDropDownLine className = "drop" color = "#fff" size = {40} onClick = {() => setToggleMenu(true)}/>
          }
        </h1>
        
      </div>
      <div className = "bh__feature-container__feature-text">
        {toggleMenu &&
        (<p>{text}</p>)
        }
      </div>
    </div>
  )
}

export default Feature