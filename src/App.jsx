import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './Pages/Login/Login'
import Register from './Pages/Register/Register'
import './App.css'

function App() {
  const [login, setLogin] = useState(false);

  useEffect(() =>{

      if(localStorage.getItem('token')){
        setLogin(true)
        
      }else{
        setLogin(false)
      }
  },[])

  return (
    <Router>
      <Routes>
        {/* Define routes for your pages */}
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  )
}

export default App
