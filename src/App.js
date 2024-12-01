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
  return (
    <>
      <div>
        <Navbar/>
      </div>
      <div>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/info" element={<Info/>} /> 
          <Route path="/javascript" element={<JavaScript/>} />
          <Route path="/embeddedc" element={<EmbeddedC/>} />
          <Route path="/log" element={<Log/>} />
        </Routes>
      </div>
    </>
  );
}

export default App;
