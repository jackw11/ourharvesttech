import React from 'react'
import './About.css'
import about_img from '../../assets/blank.png'
import play_icon from '../../assets/play.png'

const About = () => {
  return (
    <div className='about'>
      <div className="about-left">
        <img src={about_img} alt="" className='about-img'/>
        <img src={play_icon} alt="" className='play-icon'/>
      </div>
      <div className="about-right">
        <h3>ABOUT US</h3>
        <h2>Example</h2>
        <p>Example</p>
        <p>Example</p>
        <p>Example</p>
      </div>
    </div>
  )
}

export default About
