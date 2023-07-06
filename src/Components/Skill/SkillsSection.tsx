import React, { useState } from 'react'
import { skilllsList, skillsInterface } from '../../data/skillsList'


const SkillsSection = () => {
  return (
    <div className='home-details'>
        <div id ='left-bottom' className="circle"></div>
        <h1 className='skills-title'>Skills</h1>
        <div className="skill-grid">
            {skilllsList.map((skill,index)=> <Skill skill = {skill as skillsInterface}/>
           )}
        </div>
    </div>
  )
}

const Skill = ({skill}:{skill : skillsInterface })=>{
  const [active, setActive] = useState(false)
  return(
    <h6  
    onClick={()=>setActive(value=>!value)}
    className={`skill-tag ${skill.field} ${active ? 'active':''}`}>
      {skill.skill}
      </h6>
  )
}
export default SkillsSection;