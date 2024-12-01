import React from "react";
import { Route, Routes } from "react-router-dom";
import './styles/App.css';
import './styles/Navbar.css';
import Navbar from './Navbar'
import Home from './pages/Home';
import Info from './pages/Info';
import JavaScript from './pages/JavaScript';
import EmbeddedC from './pages/EmbeddedC';
import Log from './pages/Log';

function App() {
  const token = localStorage.getItem("token");
  return (
    <div>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/Info" element={<Info/>} /> 
          <Route path="/JavaScript" element={<JavaScript/>} />
          <Route path="/EmbeddedC" element={<EmbeddedC/>} />
          <Route path="/Log" element={<Log/>} />
        </Routes>
    </div>
  );
}

export default App;
