import React from 'react';
import Home from './pages/Home';
import Hazedefy from './ProjectPage/Hazedefy'
import Jadoo from './ProjectPage/Jadoo';
import Guruji from './ProjectPage/Guruji';
import {BrowserRouter, Route, Routes} from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element ={<Home/>}/>        
        <Route path='/hazedefy' element ={<Hazedefy/>}/>
        <Route path='/jadoo' element ={<Jadoo/>}/>
        <Route path='/guruji' element ={<Guruji/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
