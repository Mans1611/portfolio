import React, { useContext, useState } from 'react';
import { messageInterface, messages } from '../../data/messages';
import './chatBox.scss';
import { appContext } from '../../App';
import ChatHeader from './ChatHeader';
import QandA from './QandA';
import mans from '../../assets/manstrans.png';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import chat from '../../assets/chat.jpg';
const typing = (
    x:number,
    setMessages:React.Dispatch<React.SetStateAction<messageInterface[]>>
    )=>{
    let i = 0;
    let typed = '';
   
}
let x = 0;
const ChatBox = () => {
    
    const {dark} = useContext(appContext);
    let ms:messageInterface[] = []
    const [suggestedMessages,setSugMsgs] = useState(messages);
    const [sentMsg,setSentMsgs] = useState([] as messageInterface[])
    const [typing,setTyping] = useState(false)

    const handleSendMessage = (id:number)=>{
        
        let selectedMsg:messageInterface;
        let restMsgs: messageInterface[]=[] ;
        for(let i = 0 ; i < suggestedMessages.length;i++){
            if(id === suggestedMessages[i].id)
                selectedMsg = suggestedMessages[i];
            else{
                restMsgs.push(suggestedMessages[i])
            }
        }
        setSugMsgs(restMsgs)
        setSentMsgs(msgs=>{msgs.push(selectedMsg as messageInterface);return msgs})
       
        
    }
    const moveRight = ()=>{
        const startConv = document.getElementById('startConv');
        const chat = document.getElementById('chat');
        if(startConv && chat){
            startConv.style.transform = 'translateX(-105%)';
            chat.style.transform = 'translateX(-100%)';
        }
    }
  return (
    <div className="allconversation-container">
        <div style={{backgroundImage:chat}} id='startConv' className="startconv-wrapper">
            <div className="img-background">
                <img src={mans} alt='mans'/>
            </div>
            <button onClick={moveRight}>
                Start Conversation
                <KeyboardArrowRightIcon/>
             </button>
        </div>
        <div id='chat' className={`chatbox-container ${dark?'dark':''}`}>
            <ChatHeader typing = {typing}/>
            <div style={{backgroundImage:chat}} id='message-container' className="message-wrapper">
                {sentMsg.map((msg,index)=>
                <QandA 
                    setTyping = {setTyping}
                    typing={typing}
                    msg = {msg}
                    key={index}/>)}    
            </div>
            {
                suggestedMessages.length !== 0 &&

                <div className="textfeild">
                {suggestedMessages.map((message,index)=>
                    <SuggestMessage 
                        handleSendMessage={handleSendMessage}
                        id = {message.id} 
                        question={message.question} 
                        key = {index}/>
                    )}
                
                </div>
            }
        </div>
    </div>
  )
}

const SuggestMessage = ({question,id,handleSendMessage}:
                        {question:string,id:number,handleSendMessage:Function})=>{
  
    return (
        <h6 onClick={()=> handleSendMessage(id)} 
        className='suggestMessage'>
            {question}
        </h6>
    )
}
export default ChatBox