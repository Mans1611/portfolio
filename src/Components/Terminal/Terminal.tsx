import { useState } from 'react'
import './terminal.scss'

const Terminal = () => {
    const [commands,setCommands] = useState(
        ['/mans/ahmed>']
    );
    const handleChange = (e:any)=>{
        if(e.key === 'Enter'){
            const commandWritten = commands[commands.length -1 ].split(">")[1] 
            if(commandWritten.trim() === 'cls' || commandWritten.trim() === 'clear')
                return setCommands((command)=> ['/mans/ahmed>'])
            setCommands(commands=>[...commands, '\n/mans/ahmed>'])
        }else{
            setCommands(commands=> [...commands.slice(0,commands.length-1), commands[commands.length-1] + e.key])
        }
    }
  return (
    <div className='terminal-view'>
        <textarea onKeyUp={handleChange} value={commands.map(c=>c.replace(',',''))} className="terminal">
        </textarea>
    </div>
  )
}

export default Terminal