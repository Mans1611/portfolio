import React, { useContext } from 'react'
import { translateShow } from '../../utilis/transferShow'
import { projectInterface } from '../../data/projectList'
import Project from '../Project/Project'
import { appContext } from '../../App'

const FieldPage = ({index,field,projects} : 
    {
        index:number,
        field:{id:string,title:string,backgroundColor:string,img:string},
        projects : projectInterface[]
    }) => {
        
    const {innerWidth} = useContext(appContext);
    
    return (
    <div id={`${field.id}-projects`} style={{zIndex:index+5,
        transform:`${innerWidth > 560 ? `translateX(${index * 50}px` : `translateY(${index * 50}px`})`,
        backgroundColor : field.backgroundColor}} 
        className="projects-container project-show">
            <div  style={{
                top : `${innerWidth>560? `${50+ index * 75}px` : null }`,
            }}
                  className="side-name">
                <h3 onClick={()=>translateShow(field.id,innerWidth)} className="field">{field.title}</h3>
            </div>
            <div className="projects-grid">
                {projects.map((project,index)=> <Project project={project} key={index}/>)}
            </div>

            <div className="img-background">
              <img src={field.img} alt={field.title} />
            </div>
     </div>
  )
}

export default FieldPage