

import React, { useContext, useState } from 'react';
import './project.scss';
import { projectInterface, workingFields } from '../../data/projectList';
import ProjectPopUp from '../ProjectPopUp/ProjectPopUp';
import { appContext } from '../../App';

const Project = ({project}:{project:projectInterface}) => {

    const {projectPop,setProjectPop} = useContext(appContext);
    const modalOpen = ()=>{
        const height = Math.floor(window.innerHeight);

        setProjectPop({show:true,project:project,height:height})
        const app = document.getElementsByTagName('body')[0]
        if(app?.style)
            app.style.overflow = 'hidden'
    }
  return (
    <>
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
            <div onClick={()=>modalOpen()} className="show-more">
                <button>Show Details</button>
            </div>
        </div>
        
    </>
    
  )
}

export default Project