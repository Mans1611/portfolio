import React, { useEffect, useState } from 'react'
import './numberinfo.scss';


interface dataInterface {
  projectsNo:number,
  expYr:number 
}
const NumberedInfo = () => {
  const [projectsNo,setProjectsNo] = useState(0)
  const [yrExp,setYearExp] = useState(0)
  useEffect(()=>{
    const interval = setInterval(()=>{
      if(yrExp<3 && projectsNo < 10){
        setProjectsNo(e=>e+1)
        setYearExp(e=>e+1)
      }else if(yrExp>=3 && projectsNo < 10){
        setProjectsNo(e=>e+1)
      }
      else if (yrExp>=3 && projectsNo >= 10){
        clearInterval(interval)
      }

    },150)
    return ()=> clearInterval(interval)
  },[projectsNo,yrExp])
  
  
 
  return (
    <div className='home-details'>
        <div className="info-holder">
            <div className="info">
                <h1 id='experince' className="number">{yrExp}+</h1>
                <h1 id='projects' className="number">{projectsNo}+</h1>
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