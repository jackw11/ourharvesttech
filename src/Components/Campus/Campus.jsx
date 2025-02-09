import React from 'react'
import './Campus.css'
import { Link } from 'react-router-dom'
import blank from '../../assets/blank.png'
import white_arrow from '../../assets/white-arrow.png'

const Campus = () => {
  return (
    <div className='campus'>
      <div className="gallery">
        <img src={blank} alt="" />
        <img src={blank} alt="" />
        <img src={blank} alt="" />
        <img src={blank} alt="" />
      </div>
      <Link to="/gallery">
        <button className='btn dark-btn'>See more here <img src={white_arrow} alt="" /></button>
      </Link>
    </div>
  )
}

export default Campus
