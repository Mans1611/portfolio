import React, { useEffect, useState } from 'react';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import { messageInterface, messages } from '../../data/messages';
import TextMessage from '../TextMessage/TextMessage';
import axios from 'axios';

const textInput = document.getElementById('text-input');

const typing = (
    x:number,
    setMessages:React.Dispatch<React.SetStateAction<messageInterface[]>>
    )=>{
    let i = 0;
    let typed = '';
    // base condition.

    // setInterval(()=>{
    //     if(textInput && i < messages[x].text.length){
    //         typed+= messages[x].text[i++]
    //         textInput.innerText = typed;
    //     }
    //     else if ( textInput && i === messages[x].text.length){
    //         setTimeout(()=>{
    //             setMessages((msgArr:messageInterface[]):messageInterface[]=>{
    //                 msgArr.push(messages[x]);
    //                 return msgArr;
    //                 })
    //             typed = '';
    //             textInput.innerText = '';
    //         },1000)
    //     }
    // },100)
    // i = 0
   
}
let x = 0;
const ChatBox = () => {
    const [messagesArr,setMessages] = 
    useState<messageInterface[]>([{text:'',sender:false,time:''}]);

  return (
    <div className='chatbox-container'>
        <div className="message-wrapper">
            {messagesArr.map((msg,key)=><TextMessage key={key} msg = {msg}/>)}
        </div>
        <div className="textfeild">
            <div className="emoji">
                <EmojiEmotionsIcon/>
            </div>
            <div id='text-input' className="message-typing"></div>
            <div className="send">Send</div>
        </div>
    </div>
  )
}

export default ChatBox