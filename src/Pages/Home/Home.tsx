import  { useContext, useEffect } from 'react'
import './home.scss'
import NameTyping from '../../Components/NameTyping/NameTyping'
import Mans from '../../assets/manstrans.jpg';
import { appContext } from '../../App';
import NumberedInfo from '../../Components/NumberedInfo/NumberedInfo';
import SkillsSection from '../../Components/Skill/SkillsSection';
import Step from '../../Components/Step/Step';
import { steps } from '../../data/step';
import { Link } from 'react-router-dom';
import waves from '../../assets/wave.png';
const Home = () => {
  document.title = 'Home';
  const {
    dark,
    timeSpent,setTimeSpent
  } = useContext(appContext);
  

  useEffect(()=>{
    const startTime = new Date().getTime();
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
          <div className="first-flex">
            <NameTyping/>
            <div className="resume-container">
              <Link target='_blank' className='resumeLink' to = 'https://drive.google.com/file/d/18u9LaHky_GIakpbbL9RednELUGsC07CB/view?usp=sharing'>
                <div className="gray"></div>
                My Resume
              </Link>
            </div>
            <div className="details-holder">
              <NumberedInfo/>
              <SkillsSection/>
            </div>
          </div>
          <div className="pic-background">
           <img src={Mans} alt="Mans" /> 
          </div> 
        </div>
        
       <Step step={steps[0]}/>
       <Step step={steps[1]}/>
       
    </div>
  )
}

export default Home