import React from 'react'
import './header.css'
import badger from '../../assets/badger.png'
import {RiMapPinLine} from 'react-icons/ri';
const Header = () => {
  return (
    <div className = "bh__header section__padding" id = "home">
      <div className = "bh__header-content">
        <h1 className = "gradient__text">
          Find the hottest bars of the night at UW-Madison
          <RiMapPinLine color = "#ff0000" size = {55}/>
        </h1>
        <p>
          Curious to find out which bars your peers are going to every night?
          <b> Bar Hop </b> has your answer! It's a network designed to connect all <b> Madison </b> students together.
        </p>
        <p id = "bh-affiliation_tag">
          Not Affiliated With The University Of Wisconsin-Madison
        </p>
      </div>
      <div className = "bh__header-image">
        <img src = {badger} alt = "ai"/>
      </div>
    </div>
  )
}

export default Header