import React, { useContext, useState } from 'react'
import { appContext } from '../../App';
import './projects.scss';
import ProjectCard from '../../Components/ProjectCard/ProjectCard';
import { workingFields } from '../../data/projectList';
import { transform } from 'typescript';
import FieldPage from '../../Components/ProjectField/FieldPage';

const Projects = () => {
    const {dark} = useContext(appContext);

    const [activeCard,setActiveCard] = useState({id:"",backgroundColor:""});


  return (
    <div className={`page ${dark?'dark':''}`}>
        <div className="projectPage">
        <div className="page-title">
            <h1>My Projects</h1>
        </div>
        <div className="projects-cards-container">
            {
                workingFields.map((field,id)=>
                <ProjectCard title={field.title}
                            description={field.description}
                            backgroundColor={field.backgroundColor}
                            id={field.id}
                            img={field.img}
                            activeCard = {activeCard}
                            setActiveCard={setActiveCard}
                />)
            }
        </div>
        </div>
            { activeCard.id !== '' &&
                <div className="projects-wrapper">
                    {
                         workingFields.map((field,index)=>
                         <FieldPage 
                            field = {field}
                            index = {index}
                            projects={field.projects}
                            />
                    )
                }
                </div>
                
            }
        
    </div>
  )
}

export default Projects