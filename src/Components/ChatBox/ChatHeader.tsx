import React from 'react'
import myphoto from '../../assets/manstrans.png';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
const ChatHeader = ({typing}:{typing :boolean}) => {
  const moveRight = ()=>{
    const startConv = document.getElementById('startConv');
    const chat = document.getElementById('chat');
    if(startConv && chat){
        startConv.style.transform = 'translateX(0%)';
        chat.style.transform = 'translateX(0%)';
    }
  }
  
  return (
    <div className='chat-header'>
        <div onClick={moveRight} className="back-wrapper">
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