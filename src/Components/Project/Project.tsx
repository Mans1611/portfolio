

import React from 'react';
import './project.scss';
import { projectInterface, workingFields } from '../../data/projectList';

const Project = ({project}:{project:projectInterface}) => {
  return (
    <div className='project-holder'>
        <div className="img-wrapper">
            <img className='project-img' src={project.projectImg} />
        </div>
        <div className="project-title">
            <h2>{project.title}</h2>
        </div>
        <div className="project-description">
            <p>{`${project.description.slice(0,150)}...`}</p>
        </div>
        <div className="show-more">
            <button>Show Details</button>
        </div>
    </div>
  )
}

export default Project