import React from 'react'
import { Link } from 'react-router-dom'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'

const Hero = () => {
  return (
    <div className='hero container'>
      <div className="hero-text">
        <h1>We Ensure better Farming for a better world</h1>
        <p>Our cutting-edge Farming solutions are designed to empower farmers with the knowledge, skills, and experiences needed to excel</p>
        <Link to="/programs">
          <button className='btn'>Explore more <img src={dark_arrow} alt="" /></button>
        </Link>
      </div>
    </div>
  )
}

export default Hero
