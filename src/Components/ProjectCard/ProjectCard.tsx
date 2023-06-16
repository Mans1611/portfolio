import React, { useContext } from 'react'
import ux from '../../assets/ux.png'
import './projectcard.scss';
import { appContext } from '../../App';
import { feildsInterface } from '../../data/projectList';

const ProjectCard = (
    {title,description,backgroundColor,id,img,activeCard,setActiveCard}
    :{
        title : string,
        description : string[],
        backgroundColor:string,
        id:string,
        img:string,
        activeCard:{id:string,backgroundColor:string},
        setActiveCard : React.Dispatch<React.SetStateAction<{backgroundColor:string,id:string}>>
    }) => {

    const {dark} = useContext(appContext);

    const scroll = ()=>{
        // this function when click on any field it will scroll the page to the section.
        setTimeout(()=>{
            const section = document.getElementById('project-show');
            section?.scrollIntoView({behavior:'smooth'})
        },0)
    }

  return (
        <div onClick={()=>{scroll();setActiveCard({backgroundColor,id})}} 
             style={{backgroundColor:backgroundColor}} 
             className={`project-card ${dark?'dark':''} ${activeCard.id===id?'activeCard':''}`}>
            <div className="title">
                <h2>{title}</h2>
            </div>
            <div className="description">
                <ul>{description.map((item,index)=> <li key={index}>{item}</li>)} </ul>
            </div>
            <div className="img-container">
                <img className='img-background' src={img}/>
            </div>
        </div>
  )
}

export default ProjectCard