import React, { useContext, useEffect, useState } from 'react';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import { messageInterface, messages } from '../../data/messages';
import TextMessage from '../TextMessage/TextMessage';
import './chatBox.scss';
import { appContext } from '../../App';
import ChatHeader from './ChatHeader';
import QandA from './QandA';

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
    // const [messagesArr,setMessages] = 
    // useState<messageInterface[]>([{text:'',sender:false,time:''}]);
    const {dark} = useContext(appContext);
    let ms:messageInterface[] = []
    const [suggestedMessages,setSugMsgs] = useState(messages);
    const [sentMsg,setSentMsgs] = useState([] as messageInterface[])
    const [typing,setTyping] = useState(false)

    const handleSendMessage = (id:number)=>{
        
        //const restmsgs = suggestedMessages.filter(msg => msg.id!== id) 
        let selectedMsg:messageInterface;
        let restMsgs: messageInterface[]=[] ;
        for(let i = 0 ; i < suggestedMessages.length;i++){
            if(id === suggestedMessages[i].id)
                selectedMsg = suggestedMessages[i];
            else{
                restMsgs.push(suggestedMessages[i])
            }
        }
        // console.log(selectedMsg)
        // console.log(restMsgs)
        setSugMsgs(restMsgs)
        setSentMsgs(msgs=>{msgs.push(selectedMsg as messageInterface);return msgs})
       
        
    }
  return (
    <div className={`chatbox-container ${dark?'dark':''}`}>
        <ChatHeader typing = {typing}/>
        <div className="message-wrapper">
            {sentMsg.map((msg,index)=>
            <QandA 
                setTyping = {setTyping}
                typing={typing}
                msg = {msg}
                key={index}/>)}    
        </div>
        <div className="textfeild">
           {suggestedMessages.map((message,index)=>
            <SuggestMessage 
                handleSendMessage={handleSendMessage}
                id = {message.id} 
                question={message.question} 
                key = {index}/>
            )}
           
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