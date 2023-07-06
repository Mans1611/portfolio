import React from 'react'
import myphoto from '../../assets/manstrans.png';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
const ChatHeader = ({typing}:{typing :boolean}) => {
  return (
    <div className='chat-header'>
        <div className="back-wrapper">
            <ArrowBackIosIcon/>
            <span>Back</span>
        </div>
        <div className="img-background">
            <img src={myphoto} alt="Mansour"/>
        </div>
          <div className="conact-text">
              <h2 className='name'>Mansour</h2>
              {typing && <p className='typing'>typing...</p>}
          </div>
    </div>
  )
}

export default ChatHeader