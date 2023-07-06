import React, { useEffect, useRef, useState } from 'react'
import { messageInterface } from '../../data/messages';

const QandA = ({msg,typing,setTyping}:
    {typing:boolean,setTyping:Function,msg: messageInterface}) => {
    if(msg.time === null)
        msg.time = new Date().toLocaleTimeString().slice(0,5)
    const answerdiv = useRef<HTMLDivElement>(undefined as any);
    useEffect(()=>{
        setTyping(true)
        setTimeout(()=>{
            if(answerdiv.current)
                answerdiv.current.style.visibility = 'visible'
            setTyping(false)
        },900)
    },[])
  return (
    <div className='qustionanswer'>
        <div className="question">
            {msg.question}
            <div className="time">{msg.time? msg.time :''}</div>
        </div>
        <div ref={answerdiv} className="answer">
            {msg.answer}
            <div className="time">{msg.time? msg.time :''}</div>
        </div>
        
    </div>
  )
}

export default QandA