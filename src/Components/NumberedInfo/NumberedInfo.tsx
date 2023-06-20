import React from 'react'
import './numberinfo.scss';


const NumberedInfo = () => {
  return (
    <div className='home-details'>
        <div className="info-holder">
            <div className="info">
                <h1 id='experince' className="number">3+</h1>
                <h1 id='projects' className="number">10+</h1>
                <h3 id='experince-label'>Years of Experience in web development </h3>
                <h3 id='project-label'>Projects Completed</h3>
            </div>
        </div>
        <div className="circle" id="right"></div>
        <div className="circle" id="left"></div>
    </div>
  )
}

export default NumberedInfo