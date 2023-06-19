import React from 'react'
import { skilllsList } from '../../data/skillsList'

const SkillsSection = () => {
  return (
    <div className='home-details'>
        <div id ='left-bottom' className="circle"></div>
        <h1 className='skills-title'>Skills</h1>
        <div className="skill-grid">
            {skilllsList.map((skill,index)=> <h6 key = {index}className={`skill-tag ${skill.field}`}>{skill.skill}</h6>)}
        </div>
    </div>
  )
}

export default SkillsSection