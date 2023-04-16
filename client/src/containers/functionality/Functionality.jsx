import React from 'react'
import './functionality.css'
import {Feature} from '../../components'
const Functionality = () => {
  return (
    <div className="bh__functionality section_margin" id = "functions">
      <div className = "bh__functionality-feature">
        <Feature/>
      </div>
      <div className = "bh__functionality-heading">
        <h1 className = "gradient__text">
          Key Features of Bar Hop
        </h1>
      </div>
      <div className = "bh__functionality-container">
        <Feature/>
        <Feature/>
        <Feature/>
      </div>
    </div>
  )
}
export default Functionality