import React, { useContext } from 'react'
import './about.scss';
import AboutPhoto from '../../Components/AboutPhoto/AboutPhoto';
import { appContext } from '../../App';
import ChatBox from '../../Components/ChatBox/ChatBox';

const About = () => {
  const {dark} = useContext(appContext);

return (
    
    <div className={`about-page ${dark ? 'dark':''}`}>
        <div className="about-flex-box">
            <AboutPhoto/>
            <ChatBox/>
        </div>
    </div>
  )
}

export default About