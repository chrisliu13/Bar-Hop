import React, {useState} from 'react'
import './functionality.css'
import {Feature} from '../../components'
import badgeratbar from '../../assets/badgeratbar.png'
const Functionality = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="bh__functionality section_margin" id = "functions">
      <div className = "bh__functionality-feature">
        <Feature title = "What exactly is Bar Hop?" text = "Bar Hop is an online platform where students can vote on which bar they plan on going to every night. With more students entering data, the status of each bar can be crowd-soured into one location: revealing the population, guy/girl ratio, and grade levels. This website was brought into fruition when a group of friends realized the bipolarity of bars, often entering venues too stuffy or empty. But with the introduction to Bar Hop, all those problems faded away as they got a glimpse of the night before stepping out the pregame."/>
      </div>
      <div className = "bh__functionality-heading">
        <h1 className = "gradient__text">
          How Does Bar Hop Work?
        </h1>
      </div>
      <div className = "bh__functionality-container">
        <Feature title = "Questionare" text = "Before any of the magic happens, we need you to tell us a little about yourself. Don't worry, none of your information will be shared publically. It is only utilized by our internal system to draw inferences on the bar demographics."/>
        <Feature title = "Top Charts" text = "Top Charts display, based on your votes, the top ten most active bars of the night, along with the ratio and general age distribution."/>
        <Feature title = "Vote" text = "After getting a glance at the Top Charts, use your new knowledge to make a maximum of two votes on the bars you anticipate on going to tonight. Maybe you want to add on to the fire of the hottest bar or you prefer a more low-key bar; either way, your voice will be heard."/>
      </div>
      
    </div>
  )
}
export default Functionality