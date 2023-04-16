import './App.css';
import React, {useEffect, useState} from 'react'
import {Footer, Blog, Possibility, Features, Functionality, Header} from './containers'
import {Button, CTA, Brand, Navbar} from './components'
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
      <Features/>
      <Possibility/>
      <CTA/>
      <Blog/>
      <Footer/>
    </div>
  )
}

export default App;
