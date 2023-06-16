import React, { useContext, useState } from 'react'
import { appContext } from '../../App';
import './projects.scss';
import ProjectCard from '../../Components/ProjectCard/ProjectCard';
import { workingFields } from '../../data/projectList';

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
                <div id='project-show' style={{backgroundColor : activeCard.backgroundColor}} className="projects-container">

                </div>
            }
        
    </div>
  )
}

export default Projects