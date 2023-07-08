import React, { useEffect, useRef, useState } from 'react'
import { messageInterface } from '../../data/messages';

const QandA = ({msg,typing,setTyping}:
    {typing:boolean,setTyping:Function,msg: messageInterface}) => {
    if(msg.time === null)
        msg.time = new Date().toLocaleTimeString() // you store as a local time string
        
    const answerdiv = useRef<HTMLDivElement>(undefined as any);
    const messages_container = document.getElementById('message-container');
    
    useEffect(()=>{
        setTyping(true)
        setTimeout(()=>{
            if(answerdiv.current)
                answerdiv.current.style.visibility = 'visible'
            if(msg.hasLinks){
                answerdiv.current.innerHTML = msg.answer;
            }
            setTyping(false)
            if(messages_container)
                messages_container.scrollTo({
                    top : messages_container.scrollHeight + 50,
                    behavior : 'smooth'
                });
        },900)
    },[])
    
  return (
    <div className='qustionanswer'>
        <div className="question">
            {msg.question}
            <div className="time">{msg.time? msg.time.slice(0,5) :''}</div>
        </div>
        <div ref={answerdiv} className="answer">
            {msg.answer}
            <div className="time">{msg.time? msg.time.slice(0,5) :''}</div>
        </div>
        
    </div>
  )
}

export default QandA