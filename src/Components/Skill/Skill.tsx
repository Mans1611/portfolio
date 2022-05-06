import React from 'react'

const Skill = ({skill}:{skill:{skillsName:string,icon:string}}) => {
  return (
    <div className='skill'>
        <img src={skill.icon} alt={skill.skillsName}/>
        <h6 className='skill-name'>{skill.skillsName}</h6>
    </div>
  )
}

export default Skill