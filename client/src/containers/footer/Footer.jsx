import React from 'react'
import './footer.css'
import officiallogo from '../../assets/officiallogo.png';
import {RiInstagramLine,RiFacebookCircleLine,RiGithubLine,RiLinkedinBoxLine} from 'react-icons/ri';
const Footer = () => {
  return (
    <div className = 'bh__footer section__padding'>
      <div className = 'bh__footer-heading'>
        <h1 className = 'gradient__text'>Have any questions?</h1>
      </div>
      <div className = 'bh__footer-btn'>
        <a href = 'https://forms.gle/u7WCMZsVyLWqvZcU6'>Fill out this anonymous form</a>
      </div>
      <div className = 'bh__footer-links'>
        <div className = 'bh__footer-links_logo'>
          <img src = {officiallogo} alt = "logo"></img>
          <a href="barhopuw@gmail.com">barhopuw@gmail.com</a>
        </div>
        <div className = 'bh__footer-links_div'>
          <h4>Policy</h4>
          <p>Terms and Conditions</p>
        </div>
        <div className = 'bh__footer-links_div'>
          <h4>Get in touch</h4>
          <div className = "socials">
            <a href="https://www.instagram.com/chris.liu13/"><RiInstagramLine size = {26}/></a>
            <a href="https://www.facebook.com/christopher.liu.7334/"><RiFacebookCircleLine size = {26}/></a>
            <a href="https://www.linkedin.com/in/christopher-liu-525a2b242/"><RiLinkedinBoxLine size = {26}/></a>
            <a href="https://github.com/chrisliu13"><RiGithubLine size = {26}/></a>
          </div>
          <p>(510)378-6794</p>
          <a href="liudidi.1251@gmail.com">liudidi.1251@gmail.com</a>
        </div>
      </div>
      <div className = "bh__footer-copyright">
        <p>© 2023 Christopher Liu. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer