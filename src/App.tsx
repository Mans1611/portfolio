import React, { createContext, useContext, useState,Dispatch } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import Home from './Pages/Home/Home';
export interface props {
  dark : boolean | string| null,
  setDark : React.Dispatch<React.SetStateAction<boolean>>
}
const obj:props = {dark:null,setDark:()=>{}}
export const appContext = createContext(obj);


function App() {
  
  
  const [dark,setDark] = useState(false);
  return (
    <Router>
      <appContext.Provider value={{
        dark,setDark
      }}>

        <div className="App">
          <Routes>
          <Route path="/" element={<NavBar/>}>
            <Route index path='home' element={<Home/>}></Route>  
            <Route path='projects'></Route>  
            <Route path='about'></Route>  
            <Route path='contact'></Route>  
          
          </Route> 

          </Routes>
      </div>
      </appContext.Provider>
    </Router>
  );
}

export default App;
