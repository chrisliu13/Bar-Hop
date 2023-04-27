import './App.css';
import React from 'react'
import {Footer,GetStarted,Functionality, Header} from './containers'
import {Brand, Navbar} from './components'
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
      <Footer/>
    </div>
  )
}

export default App;
