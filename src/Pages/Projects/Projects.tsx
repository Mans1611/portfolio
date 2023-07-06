import React, { useContext, useEffect, useState } from 'react'
import { appContext } from '../../App';
import './projects.scss';
import ProjectCard from '../../Components/ProjectCard/ProjectCard';
import { workingFields } from '../../data/projectList';
import { transform } from 'typescript';
import FieldPage from '../../Components/ProjectField/FieldPage';

const Projects = () => {
    let {dark,timeSpent,setTimeSpent} = useContext(appContext);

    const [activeCard,setActiveCard] = useState({id:"",backgroundColor:""});
   
    useEffect(()=>{
        const startTime = new Date().getTime();
        return ()=> {
            if(timeSpent.hasOwnProperty("project")){
               setTimeSpent((time:{project:number})=>
                    {
                        return {
                            ...time,
                        project: time['project']  + Math.round((new Date().getTime() - startTime) /1000)
                    }
                    })
            }else{
                setTimeSpent((time)=>{return {...time,project : Math.round((new Date().getTime() - startTime) /1000)}})  
            }
            console.log(timeSpent)
        }
    },[])
    

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
                            key={id}
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
                            index={index}
                            key = {index}
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