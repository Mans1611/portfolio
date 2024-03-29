import './home.scss'
import  { useContext, useEffect } from 'react'
import NameTyping from '../../Components/NameTyping/NameTyping'
import Mans from '../../assets/mans.jpg';
import { appContext } from '../../App';
import NumberedInfo from '../../Components/NumberedInfo/NumberedInfo';
import SkillsSection from '../../Components/Skill/SkillsSection';
import { Link } from 'react-router-dom';
import ContactMe from '../../Components/ContactMe/ContactMe';
import TimeLine from '../../Components/TimeLine/TimeLine';
import Terminal from '../../Components/Terminal/Terminal';

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
            <div className="details-holder">
              <NumberedInfo/>
              <SkillsSection/>
            </div>
            <ContactMe/>
            <div className="resume-container">
              <Link target='_blank' className='resumeLink' to = 'https://drive.google.com/file/d/1Sw103jw-YpqNaKSBhefPUcCtrEnb7T0Z/view?usp=sharing'>
                <div className="gray"></div>
                My Resume
              </Link>
            </div>

            
          </div>
          
          <div className="pic-background">
            <svg className='waves-vertical' width="111" height="832" viewBox="0 0 111 832" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M111 0L106.829 34.45C102.659 69.55 94.3179 138.45 80.2023 208C65.7659 277.55 45.2341 346.45 41.0636 416C36.8931 485.55 49.4046 554.45 53.2543 624C57.4249 693.55 53.2543 762.45 51.3295 797.55L49.4046 832H0V797.55C0 762.45 0 693.55 0 624C0 554.45 0 485.55 0 416C0 346.45 0 277.55 0 208C0 138.45 0 69.55 0 34.45V0L111 0Z" fill="#20DF7F" fillOpacity="0.8"/>
              <path fillRule="evenodd" clipRule="evenodd" d="M66.6 0L57.72 27.7333C48.84 55.4667 31.08 110.933 35.52 166.4C39.96 221.867 66.6 277.333 84.36 332.8C102.12 388.267 111 443.733 111 499.2C111 554.667 102.12 610.133 86.58 665.6C71.04 721.067 48.84 776.533 37.74 804.267L26.64 832H0V804.267C0 776.533 0 721.067 0 665.6C0 610.133 0 554.667 0 499.2C0 443.733 0 388.267 0 332.8C0 277.333 0 221.867 0 166.4C0 110.933 0 55.4667 0 27.7333V0L66.6 0Z" fill={ dark ? '#011520' :"#F2F2F2"}/>
            </svg>
           <img src={Mans} alt="Mans" /> 
          </div> 
        </div>
        <TimeLine/>
        <Terminal/>
        
    </div>
  )
}

export default Home