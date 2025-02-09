import React from 'react'
import './ProgramsPage.css'
import blank from '../../assets/blank.png'

const ProgramsPage = () => {
  return (
    <div className="programs-page">
      <div style={{ height: "50px" }}></div>
      <div className="programs-header">
        <h1>Our Programs</h1>
        <p>Discover</p>
      </div>
      
      <div className="programs-container">
        <div className="program-card">
          <img src={blank} alt="Example" className="program-img" />
          <div className="program-content">
            <img src={blank} alt="" className="program-icon" />
            <h2>Example</h2>
            <p>Example</p>
            <button className="learn-more">Example</button>
          </div>
        </div>

        <div className="program-card">
          <img src={blank} alt="Example" className="program-img" />
          <div className="program-content">
            <img src={blank} alt="" className="program-icon" />
            <h2>Example</h2>
            <p>Example</p>
            <button className="learn-more">Example</button>
          </div>
        </div>

        <div className="program-card">
          <img src={blank} alt="Example" className="program-img" />
          <div className="program-content">
            <img src={blank} alt="" className="program-icon" />
            <h2>Example</h2>
            <p>Example</p>
            <button className="learn-more">Example</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProgramsPage