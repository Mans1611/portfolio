import React from 'react'
import { translateShow } from '../../utilis/transferShow'

const FieldPage = ({index,field} : 
    
    {index:number,field:{id:string,title:string,backgroundColor:string}}) => {
    
    return (
    <div id={`${field.id}-projects`} style={{zIndex:index+5,
        transform:`translateX(${index * 50}px)`,
        backgroundColor : field.backgroundColor
    }} 

        className="projects-container project-show">
            <div
                style={{
                    top: `${50+ index * 75}px`}}
                className="side-name">
                <h3 onClick={()=>translateShow(field.id)} className="field">{field.title}</h3>
            </div>
     </div>
  )
}

export default FieldPage