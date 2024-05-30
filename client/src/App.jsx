import React from 'react';
import Home from './pages/Home';
import Hazedefy from './ProjectPage/Hazedefy'
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element ={<Home/>}/>        
        <Route path='/hazedefy' element ={<Hazedefy/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
