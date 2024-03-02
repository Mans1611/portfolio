import React, { useState, useEffect, useContext } from 'react'
import './navbar.scss'
import { Link, Outlet } from 'react-router-dom'
import {Menu} from '@mui/icons-material';
import SideBar from '../SideBar/SideBar';
import { appContext } from '../../App';
import manslogo from '../../assets/Manslogo.png'

const NavBar = () => {
  
  const [showSidebar,setShowSidebar] = useState(false);
  
  const {
    dark, setDark,
    selctedLink,setSelectedLink
  } = useContext(appContext);
  
    const [showburger,setShowBurger] = useState(false);
    

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
    useEffect(()=>{
      const activeBox: (HTMLElement | null) = document.getElementById('active');
      const linksList = document.getElementsByClassName('nav-links-container')[0].children
      
    if(activeBox?.style){
      //@ts-ignore
      if(activeBox.style !== undefined || linksList[0].getBoundingClientRect()?.width !== undefined){
        
        activeBox.style.width  = (linksList[1].getBoundingClientRect().width as never) as string + 'px'
        activeBox.style.height = (linksList[1].getBoundingClientRect().height as never) as string + 'px'
        
      }
      }
  },[])

    const handleShowSideBar = ()=>{
      setShowSidebar(true);
      const app = document.getElementsByTagName('body')[0]
      if(app?.style) {
        app.style.overflow = 'hidden'    
      }
      setTimeout(()=>{
        const sideBar = document.getElementById('sidebar')
        if(sideBar?.style){
          sideBar.style.top = `${window.scrollY}px`
        }
      },0)
    }
    document.addEventListener('scroll',(e)=>{
      let top:number = window.scrollY
      if(top > 400)
        setShowBurger(true)
      else if(top < 400){
        setShowBurger(false)
      }
    })

  return (
    <>
    <div className={`navbar ${dark? 'dark':''}`}>
        <div id="left-side-navbar">
          <div className="logo-container">
            <Link onClick={()=>setSelectedLink("Home")} to='/'>
              <img src={manslogo}/>
            </Link>
          </div>
        </div>
        <div id="right-side-navbar">
            <div onClick={(e)=>moveHover(e)} className="nav-links-container">
              <div id='active' className="active"></div>
                <Link onClick={()=>setSelectedLink("Home")} className={`link ${selctedLink === 'Home'? 'activelink' : ''}`}  to='/'>Home</Link>
                <Link onClick={()=>setSelectedLink("Projects")} className={`link ${selctedLink === 'Projects'? 'activelink' : ''}`} to='projects'>Projects</Link>
                <Link onClick={()=>setSelectedLink("About")} className={`link ${selctedLink === 'About'? 'activelink' : ''}`} to='about'>About</Link>
              </div>
                
        </div>
        <div className="burger-wrapper">
          <Menu onClick={handleShowSideBar}/>
        </div>
    </div>
    <Outlet/>
    {showSidebar && <SideBar 
                    setShowSidebar = {setShowSidebar}/>}
    </>
  )
}

export default NavBar