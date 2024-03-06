import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    username : "sataymm",
    password : "123444"
  }
  return (
    <>
      <h1 className='bg-green-400'>Tailwing test</h1>

  <Card channel = "heelo satyam" newObj = {myObj} />


    </>
  )
}

export default App
