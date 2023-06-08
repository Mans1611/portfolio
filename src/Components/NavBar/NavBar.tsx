import React, { useState, useEffect } from 'react'
import './navbar.scss'
import { Link, Outlet } from 'react-router-dom'

const NavBar = () => {
  const [selctedLink,setSelectedLink] = useState("Home");
  
  
  const moveHover = (e: any)=>{
      const activeBox: (HTMLElement | null) = document.getElementById('active');
      let linksList = document.getElementsByClassName('nav-links-container')[0].children
      let index = 0;
      let accumulateWidth:number = 0
      for(let i = 1 ; i < linksList.length ; i++){
        if(linksList[i] === e.target){
          index = i -1
          break;
        }
        accumulateWidth+= ((linksList[i] as HTMLElement).getBoundingClientRect().width)
      }

      if(activeBox?.style != undefined ){
        activeBox.style.width =  `${e.target.getBoundingClientRect().width}px`
        activeBox.style.transform =  `translateX(${accumulateWidth }px)`

      }

      const active = document.getElementsByClassName('active')[0];
    }
    
    
    
    type dim = {
      width : string ,
      height : string,
    }

    useEffect(()=>{
      const activeBox: (HTMLElement | null) = document.getElementById('active');
      const linksList = document.getElementsByClassName('nav-links-container')[0].children
      
    if(activeBox?.style){
      //@ts-ignore
      if(activeBox.style != undefined || linksList[0].getBoundingClientRect()?.width != undefined){
        
        activeBox.style.width  = (linksList[1].getBoundingClientRect().width as never) as string + 'px'
        //console.log(((linksList[0].getClientRects() as never) as dim).width)
        activeBox.style.height = (linksList[1].getBoundingClientRect().height as never) as string + 'px'
        console.log(activeBox.style)
        console.log((linksList[1].getBoundingClientRect().height as never) as string) 
      
      }
      }
  },[])



  return (
    <>
    <div className='navbar'>
        <div id="left-side-navbar"></div>
        <div id="right-side-navbar">
            <div onClick={(e)=>moveHover(e)} className="nav-links-container">
              <div id='active' className="active"></div>
                <Link onClick={()=>setSelectedLink("Home")} className={`link ${selctedLink === 'Home'? 'activelink' : ''}`}  to='home'>Home</Link>
                <Link onClick={()=>setSelectedLink("Projects")} className={`link ${selctedLink === 'Projects'? 'activelink' : ''}`} to='projects'>Projects</Link>
                <Link onClick={()=>setSelectedLink("About")} className={`link ${selctedLink === 'About'? 'activelink' : ''}`} to='about'>About</Link>
                <Link onClick={()=>setSelectedLink("Contact")} className={`link ${selctedLink === 'Contact'? 'activelink' : ''}`} to='contact'>Contact</Link>
            </div>
        </div>
    </div>
    <Outlet/>
    </>
  )
}

export default NavBar