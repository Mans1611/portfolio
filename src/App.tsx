import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import Home from './Pages/Home/Home';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
        <Route path="/" element={<NavBar/>}>

          <Route path='home' element={<Home/>}></Route>  
          <Route path='projects'></Route>  
          <Route path='about'></Route>  
          <Route path='contact'></Route>  
         
        </Route> 

        </Routes>
      </div>
    </Router>
  );
}

export default App;
