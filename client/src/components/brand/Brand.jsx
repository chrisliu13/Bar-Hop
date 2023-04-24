import React from 'react';
import './brand.css';
import Marquee from "react-fast-marquee";
import {kollege_klub_logo,whiskeyjacks,doubleu,rr_topnavlogo,wandos} from './imports.js'
const Brand = () => {
  return (
    /*NEED TO FIX THE MARQUEE*/
    
      <Marquee className = "bh__brand-marquee" speed={40}>
        <div className = "bh__brand section__padding" id = "brand">
          <div>
            <img src = {kollege_klub_logo} alt = "Kollege Klub"/>
          </div>
          <div>
            <img src = {whiskeyjacks} alt = "Whiskey Jacks"/>
          </div>
          <div>
            <img src = {doubleu} alt = "Double U"/>
          </div>
          <div>
            <img src = {rr_topnavlogo} alt = "Red Rock"/>
          </div>
          <div>
            <img src = {wandos} alt = "Wandos"/>
          </div>
        </div>
      </Marquee>

  )
}

export default Brand