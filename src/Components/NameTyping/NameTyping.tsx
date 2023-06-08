import React, { useEffect, useState } from 'react'

const NameTyping = () => {
    const originalName = `Hi, I am 
    Mansour Mohamed
    Full-Stack Web developer & 
    Data Scientist`
    const max = originalName.length;
    let typedName:string = ''
    let i = 0
    useEffect(()=>{
        const typingInterval = setInterval(()=>{
            if(typedName.length===max){
               return null;
            }
            typedName +=originalName[i++]
            const print =  document.getElementById('type-motion')
            if(print){
                print.innerText = typedName;
            }
            
        },100)

        return ()=> clearInterval(typingInterval);
    },[])
    return (
    <div id='type-motion' className="half name-typing">
    </div>
  )
}

export default NameTyping