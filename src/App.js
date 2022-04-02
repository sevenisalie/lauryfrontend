import React, {useEffect, useState} from "react"
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';

//components
import Home from "./pages/home/index.js"
import Authentication from "./pages/authentication"
import Docs from "./pages/docs"

import NavigationBar from "./components/NavigationBar";


function App() {
  return (
    <>
  
  <Router  basename="/" >
      <NavigationBar />

        <Routes>

          <Route path='/' element={<Home/>} />
     
          <Route path='/authentication' element={<Authentication/>} />

          <Route path="/docs" element={<Docs/>} />


        </Routes>
      
    </Router>
    </>
  );
}

export default App;
