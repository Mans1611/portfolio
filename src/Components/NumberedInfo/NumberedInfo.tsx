import React from 'react'
import './numberinfo.scss';


const NumberedInfo = () => {
  return (
    <div className='home-details'>
        <div className="info-holder">
            <div id = 'experince' className="info">
                <h1 className="number">3+</h1>
                <h3 className="info-title">Years of Experience in web development </h3>
            </div>
            <div id='projects' className="info">
                <h1 className="number">10+</h1>
                <h3 className="info-title">Projects Completed</h3>
            </div>
        </div>
        <div className="circle" id="right"></div>
        <div className="circle" id="left"></div>
    </div>
  )
}

export default NumberedInfo