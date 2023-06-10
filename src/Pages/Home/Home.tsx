import React from 'react'
import './home.scss'
import NameTyping from '../../Components/NameTyping/NameTyping'
const Home = () => {
  return (
    <div className='home-page'>
        <div className="home-first-wrapper">
            <NameTyping/>

            <div className="half picture-wrapper">
              <div className="pic-background">
                
              </div>
            </div>

        </div>
        <div className="back-dark-box">
         <div className="tringle"></div>
        </div>
    </div>
  )
}

export default Home