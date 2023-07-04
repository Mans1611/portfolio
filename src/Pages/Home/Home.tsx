import  { useContext, useEffect } from 'react'
import './home.scss'
import NameTyping from '../../Components/NameTyping/NameTyping'
import Mans from '../../assets/manstrans.png';
import { appContext } from '../../App';
import NumberedInfo from '../../Components/NumberedInfo/NumberedInfo';
import SkillsSection from '../../Components/Skill/SkillsSection';
import TopProjects from '../../Components/TopProjects/TopProjects';
import Certificate from '../../Components/Certificate/Certificate';
import { top3projects } from '../../data/top3projects';

const Home = () => {
  const {
    dark,
    timeSpent,setTimeSpent
  } = useContext(appContext);
  

  useEffect(()=>{
    const startTime = new Date().getTime();
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

    return ()=> {
        if(timeSpent.hasOwnProperty("home")){
            setTimeSpent((time:{home:number})=>
                {
                    return {
                        ...time,
                    home: time['home']  + Math.round((new Date().getTime() - startTime) /1000)
                }
                })
        }else{
            setTimeSpent((time)=>{return {...time,home : Math.round((new Date().getTime() - startTime) /1000)}})  
        }
    }
   
    
},[])


  return (
    <div className={`home-page ${dark?'dark':''}`}>
        <div className="home-first-wrapper">
            <NameTyping/>
            <div className="picture-wrapper">
              <div className="pic-background">
                <img className='my_photo' src={Mans}/>
              </div>
            </div>

        </div>
        <div className="details-holder">
          <NumberedInfo/>
          <SkillsSection/>
        </div>
        <TopProjects/>
        <Certificate/>
    </div>
  )
}

export default Home