import React, {Dispatch,SetStateAction } from 'react'
import '../NavBar/navbar.scss';

interface propsType {
    setShowSidebar: Dispatch<SetStateAction<boolean>>
}
const SideBar = (props : propsType) => {
    const disapper = ()=>{
        const sidebar = document.getElementById('sidebar');
        if(sidebar?.style)
            sidebar.style.transform =  "translateX(100%)"
        setTimeout(()=>{
            props.setShowSidebar(false)
        },150)
    }
  return (
    <div id='sidebar' onClick={disapper} className='sidebar-container'>
        mans
    </div>
  )
}

export default SideBar