import React, { useContext } from 'react'
import { projectInterface } from '../../data/projectList'
import './projectpopup.scss';
import CloseIcon from '@mui/icons-material/Close';
import { appContext } from '../../App';
import Skill from '../Skill/Skill';
const ProjectPopUp = ({project}:{project:projectInterface}) => {
    

    const {projectPop,setProjectPop} = useContext(appContext);
    const handleClose = ()=>{
        setProjectPop({show:false,project:{},top:window.scrollY});
        const app = document.getElementsByTagName('body')[0]
        if(app?.style)
            app.style.overflow = 'auto' 
    }

    
    const close = (e: EventTarget ) :void=>{
        if(( (e as HTMLElement).classList.contains('modal')))  
            handleClose();
    }
    
  return (
    <div style={{top:projectPop.top}} onClick={(e)=>close(e.target)} className='modal'>
        <div className="model-container">
            <div onClick={handleClose} className="closeIcon">
                <CloseIcon/>
            </div>
            <div className="img-holder">
                <img src={project.projectImg} />
            </div>
            <div className="project-details">
                <h1 className="poptitle">{project.title}</h1>
                <h2 className="title">Description</h2>
                
                <p className='answer'>{project.description}</p>
                <h2 className="title">Skills</h2>
                <div className="skills-container">
                    {project.skills.map((skill,key)=><Skill skill={skill} key={key}/>)}
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProjectPopUp