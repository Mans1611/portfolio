import React, { FunctionComponent, useEffect, useState } from 'react'

const NameTyping = () => {
    const codeTag = "<code></code>";
    const myName = "Manosur Mohamed";
    const hi = `I am `;
    const role = `, I am Full-Stack Web developer & Data Scientist`;
    useEffect(()=>{
        let typingInterval:NodeJS.Timeout;
        
        const gretting =  document.getElementById('gretting')
        const codeSpan = document.getElementById('code')
        const nameSpan = document.getElementById('myname')
        const roleSpan = document.getElementById('role')
        const codeend = document.getElementById('codeend');
        let i = 0;
        let code_i = 0;
        let name_i = 0;
        let role_i = 0;

        let typedName:string = ''
        let typedCode:string = ''
        let typedGretting:string = ''
        let typedRole:string = ''
        let typedendCode:string = '';

       
        if(typedendCode.length !== 7){
            typingInterval = setInterval(()=>{
                // end of typing and clear the interval
                if(typedendCode.length === 7){
                    clearInterval(typingInterval);
                   return null;
                }
                // first one to type <code>
                if(code_i < 6){
                    
                    if(codeSpan?.innerText !== undefined){
                        typedCode += codeTag[code_i++];
                        codeSpan.innerText = typedCode;
                    }
                }
                // then it will type gratings after code finishes 
                else if(code_i === 6 && typedGretting.length < 5){
                    typedGretting += hi[i++]
                    if(gretting){
                        gretting.innerText = typedGretting;
                    } 
                }
                // then type my name
                else if(i === 5 && typedName.length < 15){
                    if(nameSpan?.innerText !== undefined){
                        typedName += myName[name_i++]
                        nameSpan.innerText = typedName;
                    }
                    
                }
                // then type my role 
                else if(typedName.length === 15 && typedRole.length !== role.length){
                    if(roleSpan?.innerText !== undefined){
                        typedRole += role[role_i++]
                        roleSpan.innerText = typedRole
                    }
                }
                else if(typedName.length === 15 && typedRole.length === role.length && typedendCode.length !== 7){
                    if(codeend?.innerText !== undefined){
                        typedendCode += codeTag[code_i++]
                        codeend.innerText = typedendCode;
                    }
                } 
            },100)
        }

        return ()=> clearInterval(typingInterval);
    },[])

    return (
    <div id='type-motion' className="name-typing">
        <span className='code' id='code'></span>
        <span id='gretting'></span>
        <span id="myname"></span>
        <span id='role'></span>
        <span className='code' id='codeend'></span>
    </div>
  )
}

export default NameTyping