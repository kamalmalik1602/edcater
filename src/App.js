import React from 'react'
import "./App.css"
import Login from './components/Login'
import Navbar from './components/Navbar'
import Navbar2 from './components/Navbar2'
import Navbar3 from './components/Navbar3'
import Navbar4 from './components/Navbar4'
import Navbar5 from './components/Navbar5'
import Navbar6 from './components/Navbar6'
import Navbar7 from './components/Navbar7'
import {Routes, Route, Navigate} from 'react-router-dom';

const App = () => {
  return (
    <div>
      {/* <Login/> */}
      {/* <Navbar/> */}
      {/* <Navbar2/> */}
      {/* <Navbar3/> */}
      {/* <Navbar4/> */}
      <Navbar7/>
      
      {/* <Routes>
        <Route path='/' element ={<Navbar5/>}/>
   
        <Route path="/navbar" element={<Navbar6/>}/>
      
      </Routes>
       */}

    </div>
  )
}

export default App
