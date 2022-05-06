import React, { createContext, useContext, useState,Dispatch } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import Home from './Pages/Home/Home';
import Projects from './Pages/Projects/Projects';
import ProjectPopUp from './Components/ProjectPopUp/ProjectPopUp';
import { projectInterface } from './data/projectList';

export interface props {
  dark : boolean | string| null,
  setDark : React.Dispatch<React.SetStateAction<boolean>>,
  projectPop : {show:boolean,project:object},
  setProjectPop:React.Dispatch<React.SetStateAction<{show:boolean,project:{}}>>
}

const obj:props = {
  dark:null,setDark:()=>{},
  projectPop : {show:false,project:{}},
  setProjectPop : ()=>{}
}
export const appContext = createContext(obj);


function App() {
  const [dark,setDark] = useState(false);
  const [projectPop,setProjectPop] = useState({show:false,project:{}});
  
  return (
    <Router>
      <appContext.Provider value={{
        dark,setDark,
        projectPop,setProjectPop
      }}>

        <div id='app' className="App">
          <Routes>
          <Route path="/" element={<NavBar/>}>
            <Route index path='home' element={<Home/>}></Route>  
            <Route path='projects' element={<Projects/>}></Route>  
            <Route path='about'></Route>  
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
