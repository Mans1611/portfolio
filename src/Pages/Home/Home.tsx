import React, { useContext, useEffect } from 'react'
import './home.scss'
import NameTyping from '../../Components/NameTyping/NameTyping'
import Mans from '../../assets/Mans.jpeg';
import { appContext } from '../../App';
import HomeProjects from '../../Components/HomeProjects/HomeProjects';
import NumberedInfo from '../../Components/NumberedInfo/NumberedInfo';
import SkillsSection from '../../Components/Skill/SkillsSection';
import TopProjects from '../../Components/TopProjects/TopProjects';
import Certificate from '../../Components/Certificate/Certificate';

const Home = () => {
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