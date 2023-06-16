import React, { useContext } from 'react'
import './home.scss'
import NameTyping from '../../Components/NameTyping/NameTyping'
import Mans from '../../assets/Mans.jpeg';
import { appContext } from '../../App';
import HomeProjects from '../../Components/HomeProjects/HomeProjects';

const Home = () => {
  const {
    dark
  } = useContext(appContext);
  return (
    <div className={`home-page ${dark?'dark':''}`}>
        <div className="home-first-wrapper">
            <NameTyping/>
            <div className="half picture-wrapper">
              <div className="pic-background">
                <img className='my_photo' src={Mans}/>
              </div>
            </div>

        </div>
        <div className="back-dark-box">
          <div className="tasks">
              Here I Can:
              <ul>
                <li>Create You Web Appliaction.</li>
                <li>Create Rest API.</li>
                <li>Analysis your Data.</li>
                <li>Build Machine Learning to predict future analysis.</li>
              </ul>
          </div> 
         <div className="tringle"></div>
        </div>
        <HomeProjects/>
    </div>
  )
}

export default Home