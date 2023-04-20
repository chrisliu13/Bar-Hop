import React from 'react'
import './getstarted.css'
import {Form} from '../../components'
/*this page is designed to house the form, where users enter their age and gender*/
const GetStarted = () => {
  return (
    <div className = "bh__getstarted section_margin" id = "start">
      <div className = "bh__getstarted-heading">
        <h1 className = "gradient__text">
          Questionare
        </h1>
      </div>
      <div>
        <Form/>
      </div>
    </div>
  )
}

export default GetStarted