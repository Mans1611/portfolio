import React from 'react'
import { topinterface } from '../../data/top3projects'

const TopProject = ({project}:{project:topinterface}) => {
  return (
    <div id = {`${project.title}-wrapper`} className="wrapper">

      <div id={project.title} className="top-project-card">
          <div className="img-wrapper">
              <img src={project.projectImg} alt={project.title} />
          </div>
          <p className="description">{project.description}</p>
          <div className={`background-cover ${project.type}`}></div>
          <div className={`dark-shadow ${project.type}`}></div>
      </div>
    </div>
  )
}

export default TopProject