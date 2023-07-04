import React, { useContext, useEffect } from 'react'
import './about.scss';
import AboutPhoto from '../../Components/AboutPhoto/AboutPhoto';
import { appContext } from '../../App';
import ChatBox from '../../Components/ChatBox/ChatBox';
import TopProjects from '../../Components/TopProjects/TopProjects';
import Certificate from '../../Components/Certificate/Certificate';
import { top3projects } from '../../data/top3projects';
const About = () => {
  const {dark} = useContext(appContext);
  useEffect(()=>{
    const top3_project_cards = document.getElementsByClassName('wrapper');

    const leftProject =  document.getElementById(top3projects[0].title)
    const middleProject = document.getElementById(top3projects[1].title)
    const rightProject = document.getElementById(top3projects[2].title)
    if(leftProject && middleProject && rightProject){
        leftProject.style.transform = 'translateX(-150%)' 
        middleProject.style.transform = 'translateX(-250%)' 
        rightProject.style.transform = 'translateX(150%)' 
    }
    
    
    const observer = new IntersectionObserver((entries,observer)=>{
      entries.forEach((entry)=>{
        if(entry.isIntersecting)
            if(entry.target.id === `${top3projects[0].title}-wrapper` && leftProject) leftProject.style.transform = 'translateX(0%)' 
            else if(entry.target.id === `${top3projects[1].title}-wrapper` && middleProject ) middleProject.style.transform = 'translateX(0%)' 
            else if(entry.target.id === `${top3projects[2].title}-wrapper` && rightProject) rightProject.style.transform = 'translateX(0%)' 
      
          })
    
    },{
      rootMargin:'0px',
      threshold : 0.4
    });

    for(let i = 0 ; i < top3_project_cards.length ; i++){
      observer.observe(top3_project_cards[i])
    }

   
  
    const top3_project_divs = document.getElementById('top3_projects')
    document.addEventListener('scroll',(e)=>{
      const secondObserver = new IntersectionObserver((entries,observer)=>{
        if(top3_project_divs?.style )
          top3_project_divs.style.borderRadius = (`2000px / ${entries[0].intersectionRect.top  }px`) as string 
        
    },{
      threshold:0,
      rootMargin:'0px'
    })
      secondObserver.observe(top3_project_divs as HTMLElement)
  })

  },[])
return (
    
    <div className={`about-page ${dark ? 'dark':''}`}>
        <div className="about-flex-box">
            <AboutPhoto/>
            <ChatBox/>
        </div>
         <TopProjects/>
         <Certificate/>
    </div>
  )
}

export default About