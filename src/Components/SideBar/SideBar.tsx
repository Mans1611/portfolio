import React, {Dispatch,SetStateAction, useContext } from 'react'
import '../NavBar/navbar.scss';
import { appContext } from '../../App';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { Link } from 'react-router-dom';

import LightModeIcon from '@mui/icons-material/LightMode';
import NightlightIcon from '@mui/icons-material/Nightlight';

interface propsType {
    setShowSidebar: Dispatch<SetStateAction<boolean>>
}
const SideBar = (props : propsType) => {

    const disapper = (clickedLink:(string | null)): void=>{

        const sidebar = document.getElementById('sidebar');
        const app = document.getElementsByTagName('body')[0];
        if(app?.style)
            app.style.overflow = 'auto';
        if(clickedLink !== null)
            setSelectedLink(clickedLink);
        if(sidebar?.style)
            sidebar.style.transform =  "translateX(100%)"
        setTimeout(()=>{
            props.setShowSidebar(false)
        },150)
    }

    const hideSideBar = (target:EventTarget) =>{
        if((target as HTMLElement).classList.contains('modal'))
            disapper(null);
    }
    
    
    const {dark,setDark,selctedLink,setSelectedLink} = useContext(appContext);
    


    return (
        <div onClick={(e)=>hideSideBar(e.target)} className="modal">
            <div id='sidebar'  className={`sidebar-container ${dark?'dark':''}`}>
                <div className="backicon">
                    <KeyboardArrowRightIcon className='disappericon' onClick = {()=>disapper(null)}/>
                </div>

                <div className="protofolio-title">
                    <h1>Mansour's Portfolio</h1>
                </div>
                <div className="links-container">
                    <div className={`link-item ${selctedLink === 'Home'? 'selected-link':''}`}>
                        <Link onClick={()=>disapper("Home")} to='/home'>Home</Link>
                    </div>
                    <div className={`link-item ${selctedLink === 'Projects'? 'selected-link':''}`}>
                        <Link onClick={()=>disapper("Projects")} to='/projects'>Projects</Link>
                    </div>
                    <div className={`link-item ${selctedLink === 'About'? 'selected-link':''}`}>
                        <Link onClick={()=>disapper("About")} to='/about'>About</Link>
                    </div>
                    <div className={`link-item ${selctedLink === 'Contact'? 'selected-link':''}`}>
                        <Link onClick={()=>disapper("Contact")} to='/contact'>Contact</Link>
                    </div>
                    <div className='link-item theme-wrapper'>
                        <span className='theme' onClick={()=>{setDark(!dark)}}>Theme : {dark ? 'Dark': 'Light'}</span>
                        <span>{dark ? <NightlightIcon/> : <LightModeIcon/>}</span>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default SideBar