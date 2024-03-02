import { useContext, useState } from 'react'
import './terminal.scss'
import teminallogo from '../../assets/coding (1).png';
import { useNavigate } from 'react-router-dom';
import { appContext } from '../../App';
const Terminal = () => {
    const {setSelectedLink} = useContext(appContext);
    const [commands,setCommands] = useState(
        ['/mans/ahmed>']
    );
    const navigate = useNavigate(); // for navigation to pages.
    const handleChange = (e:any)=>{
        if(e.key === 'Enter'){
            const commandWritten = commands[commands.length -1 ].split(">")[1] 
            if(commandWritten.trim() === 'cls' || commandWritten.trim() === 'clear')
                return setCommands((command)=> ['/mans/ahmed>'])
            else if(commandWritten.split(' ')[0] ==='nav' ){
                const navGroup = ['about','projects']
                const navTraget = commandWritten.split(' ')[1]
                if (navGroup.find(element=>element===navTraget)){

                    setTimeout(()=>{
                        navigate(navTraget)
                        setSelectedLink('Projects')},600)
                    }
               else{
                    setCommands(commands=>[...commands,
                         `\nthis page is not exist, you can nav to :
                            -- projects
                            -- about
                            -- articles 
                         \n/mans/ahmed>`])

                }
            } 
            setCommands(commands=>[...commands, '\n/mans/ahmed>'])
        }
        else if(e.key === 'Backspace'){
            setCommands(commands=> [...commands.slice(0,commands.length-1), commands[commands.length-1].slice(0,commands[commands.length-1].length-1)])
        }
        else if( (/^[a-zA-Z0-9]$/).test(e.key) && e.key.length < 2){
            setCommands(commands=> [...commands.slice(0,commands.length-1), commands[commands.length-1] + e.key])
        }
        else{
            setCommands(commands=> [...commands.slice(0,commands.length-1), commands[commands.length-1] + e.key])

        }
    }
  return (
    <div className='terminal-view'>
        <div className="upper">
                <img src={teminallogo} alt="bash" />
                <h2>terminal</h2>
                <div className="apple-btns">
                    <div style={{background:'#5ef581'}} className="circle"></div>
                    <div style={{background:'#f3c809'}} className="circle"></div>
                    <div style={{background:'#ff3452'}} className="circle"></div>
                </div>
        </div>
            <textarea onKeyUp={handleChange} value={commands.map(c=>c.replace(',',''))} className="terminal">
            </textarea>
        </div>
  )
}

export default Terminal