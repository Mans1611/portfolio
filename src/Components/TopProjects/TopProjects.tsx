import React, { useContext } from 'react'
import './topprojects.scss';
import { appContext } from '../../App';
import { top3projects } from '../../data/top3projects';
import TopProject from './TopProject';
import { Link } from 'react-router-dom';

const TopProjects = () => {

    const {dark} = useContext(appContext);


  return (
    <div id ='top3_projects' className={`top-projects ${dark?'dark' : ''}`}>

        <h1 className='top-title'>Top Projects</h1>
        <div className='flex-box top-container'>
            {top3projects.map((project,key)=> <TopProject key={key} project={project}/>)}
        </div>

       <div className="navto-projects">
            <Link to='/projects'>
                <div className="gray"></div>
                See All Projects
            </Link>
       </div>
      
    </div>
  )
}

export default TopProjects