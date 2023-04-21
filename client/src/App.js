import './App.css';
import React, {useEffect, useState} from 'react'
import {Footer, Blog, Possibility, GetStarted, Functionality, Header, Topvote} from './containers'
import {Button, CTA, Brand, Navbar, Form, Vote} from './components'
const App = () => {
  return(
    <div className = "App">
      <div className = "gradient__bg">
        <div className = "background__img">
          <Navbar/>
        </div>
        <Header/>
      </div>
      <Brand/>
      <Functionality/>
      <GetStarted/>
      <Possibility/>
      <CTA/>
      <Blog/>
      <Footer/>
    </div>
  )
}

export default App;
