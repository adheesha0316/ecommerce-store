import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Login from './Pages/Login/Login'
import Register from './Pages/Register/Register'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Login /> */}
      <Register />
    </>
  )
}

export default App
