import React from 'react'
import { messageInterface } from '../../data/messages'

const TextMessage = ({msg}:{msg:messageInterface}) => {
    return (
        <></>
        // <div className={`textmessage ${msg.sender ? 'right':'left'}`}>{msg.text}</div>
    )
    
    
}

export default TextMessage