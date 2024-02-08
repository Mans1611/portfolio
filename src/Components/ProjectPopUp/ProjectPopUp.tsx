import  { useContext, useState } from 'react'
import { projectInterface } from '../../data/projectList'
import './projectpopup.scss';
import CloseIcon from '@mui/icons-material/Close';
import { appContext } from '../../App';
import Skill from '../Skill/Skill';
import { Link } from 'react-router-dom';


const ProjectPopUp = ({project}:{project:projectInterface}) => {    
    const [moreDetails,setMoreDetails] = useState(false);
    const {projectPop,setProjectPop} = useContext(appContext);
    
    const handleClose = ()=>{
        setProjectPop({show:false,project:{},height:window.innerHeight});
        const app = document.getElementsByTagName('body')[0]
        if(app?.style)
            app.style.overflow = 'auto' 
    }

    const close = (e: EventTarget ) :void=>{
        if(( (e as HTMLElement).classList.contains('modal')))  
            handleClose();
    }
    const model_container = document.getElementById('model-container');
    const handleShow = ():void =>{
        setMoreDetails(true)
        setTimeout(()=>{
            model_container?.scrollTo({
                top : 1900,
                behavior:'smooth'
            })
        },0)
        
    }
    
  return (
    <div style={{top:window.scrollY,bottom:window.scrollY,height:projectPop.height}} 
        onClick={(e)=>close(e.target)} className='modal'>
        <div id='model-container' className="model-container">
            <div onClick={handleClose} className="closeIcon">
                <CloseIcon/>
            </div>
            <div className="img-holder">
                <img src={project.projectImg} />
            </div>
            <div className="project-details">
                <div className={`project-status ${project.status}`}>{project.status}</div>
                <h1 className="poptitle">{project.title}</h1>
                <h2 className="title">Description</h2>
                
                <p className='project-description'>{project.description}</p>
                <h2 className="title">Skills</h2>
                <div className="skills-container">
                    {project.skills.map((skill,key)=><Skill skill={skill} key={key}/>)}
                </div>
            </div>
            <div className="links-wrapper">
                { project.link.repo ?
                    <Link className='outer-link' target="_blank" to ={project.link.link}>GitHub Link</Link>
                    :
                    <Link className='outer-link' target="_blank" to ={project.link.link}>Link</Link>
                }
            </div>
            <div className="links-wrapper">
                {  project.images &&
                    <div onClick={handleShow} className='moredetails'>See More Details </div>
                }
            </div>
            { moreDetails &&

                <div className="imgs-cotainer">
                    {
                        project.images?.map((img,index)=><img key={index} src={img.imgs} className={`${img.horizental? 'horizental':'vertical'}`}/>)
                    }
                </div>
            }
        </div>
    </div>
  )
}

export default ProjectPopUp