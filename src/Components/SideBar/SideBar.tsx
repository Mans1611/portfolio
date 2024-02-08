import React, {Dispatch,SetStateAction, useContext } from 'react'
import '../NavBar/navbar.scss';
import { appContext } from '../../App';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { Link } from 'react-router-dom';
import Logo from '../../assets/fullLogo.png';

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

                <div className="links-container">
                    <div className={`link-item ${selctedLink === 'Home'? 'selected-link':''}`}>
                        <Link onClick={()=>disapper("Home")} to='/'>Home</Link>
                    </div>
                    <div className={`link-item ${selctedLink === 'Projects'? 'selected-link':''}`}>
                        <Link onClick={()=>disapper("Projects")} to='/projects'>Projects</Link>
                    </div>
                    <div className={`link-item ${selctedLink === 'About'? 'selected-link':''}`}>
                        <Link onClick={()=>disapper("About")} to='/about'>About</Link>
                    </div>
                </div>
                <div className="logo">
                    <img src={Logo} alt="Logo" srcSet=''/>
                </div>
            </div>
        </div>
  )
}

export default SideBar