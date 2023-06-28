import React, { createContext, useContext, useState,Dispatch } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import Home from './Pages/Home/Home';
import Projects from './Pages/Projects/Projects';
import ProjectPopUp from './Components/ProjectPopUp/ProjectPopUp';
import { projectInterface } from './data/projectList';
import About from './Pages/About/About';

export interface props {
  dark : boolean | string| null,
  setDark : React.Dispatch<React.SetStateAction<boolean>>,
  projectPop : {show:boolean,project:object,top:number},
  setProjectPop:React.Dispatch<React.SetStateAction<{show:boolean,project:{},top:number}>>,
  selctedLink:string,
  setSelectedLink: React.Dispatch<React.SetStateAction<string>>
  innerWidth : number,
  timeSpent : object,setTimeSpent : React.Dispatch<React.SetStateAction<object>>
}

const obj:props = {
  dark:null,setDark:()=>{},
  projectPop : {show:false,project:{},top:window.scrollY},
  setProjectPop : ()=>{},
  selctedLink: "",
  setSelectedLink:()=>{},
  innerWidth : window.innerWidth,
  timeSpent : {},
  setTimeSpent: ()=>{}
}
export const appContext = createContext(obj);



function App() {
  const [dark,setDark] = useState(false);
  const [projectPop,setProjectPop] = useState({show:false,project:{},top:window.scrollY});
  const [innerWidth] = useState(window.innerWidth)
  const [selctedLink,setSelectedLink] = useState("Home");

  const activeLink = window.location.href.split("/")[0];
  const linksList = ['home','projects','about','contact'];
  const [timeSpent,setTimeSpent] = useState({});

  if(linksList.includes(activeLink))
    setSelectedLink(activeLink)
  

  return (
    <Router>
      <appContext.Provider value={{
        dark,setDark,
        projectPop,setProjectPop,
        selctedLink,setSelectedLink,
        timeSpent,setTimeSpent,
        innerWidth
      }}>

        <div id='app' className="App">
          <Routes>
          <Route path="/" element={<NavBar/>}>
            <Route index path='home' element={<Home/>}></Route>  
            <Route path='projects' element={<Projects/>}></Route>  
            <Route path='about' element={<About/>}></Route>  
            <Route path='contact'></Route>
          </Route> 

          </Routes>
          {projectPop.show && <ProjectPopUp project={projectPop.project as projectInterface}/>}
          
      </div>
      </appContext.Provider>
    </Router>
  );
}

export default App;
