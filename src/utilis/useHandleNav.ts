import { useNavigate } from "react-router-dom"
import { appContext } from "../App";

export interface TerminalHandles {
    commands : string[],
    setCommands : React.Dispatch<React.SetStateAction<string[]>>
}

export const useHandleNav=(page:string)=>{  
    const nav = useNavigate()
    switch(page){
        case "projects" : 
            nav('/projects')
            break
        case 'about':
            return 'about'
            break
        default :
            return 'this page dose not exist' 

    }
} 