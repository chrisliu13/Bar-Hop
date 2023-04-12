import './App.css';
import React, {useEffect, useState} from 'react'
import {Footer, Blog, Possibility, Features, WhatGPT3, Header} from './containers'
import {Button, CTA, Brand, Navbar} from './components'
const App = () => {
  return(
    <div className = "App">
      <div className = "gradient__bg">
        <Navbar/>
        <Header/>
      </div>
      <Brand/>
      <WhatGPT3/>
      <Features/>
      <Possibility/>
      <CTA/>
      <Blog/>
      <Footer/>
    </div>
  )
}

export default App;
