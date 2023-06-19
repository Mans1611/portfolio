import React, { useContext } from 'react'
import './home.scss'
import NameTyping from '../../Components/NameTyping/NameTyping'
import Mans from '../../assets/Mans.jpeg';
import { appContext } from '../../App';
import HomeProjects from '../../Components/HomeProjects/HomeProjects';
import NumberedInfo from '../../Components/NumberedInfo/NumberedInfo';
import SkillsSection from '../../Components/Skill/SkillsSection';

const Home = () => {
  const {
    dark
  } = useContext(appContext);
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
       
    </div>
  )
}

export default Home