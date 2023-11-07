import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Routes,
  } from "react-router-dom";
  import Home from '../components/Home'
  import Login from '../components/Login'
  import About from '../components/About'
  import Navbar from '../components/NavLink'

const App = () => {
  return (
    <div>
    <Router>
    <Navbar/>
    <Routes>
      <Route path="/about" element={<About/>}/>
      <Route path="/login" element={<Login/>} />
      <Route  path="/" element={<Home/>} />
    </Routes>
  </Router>,
  </div>
  )
}

export default App