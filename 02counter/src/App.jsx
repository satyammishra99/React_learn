import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(0)
//let counter =15;
let addValue = ()=>{
  console.log("====counter===",counter);
  counter++;
  setCounter(counter);
}
let removeValue =()=>{
  --counter
  if(counter<0)counter=0
  setCounter(counter);
}
  return (
    <>
     <h1> chai aur code</h1>
     <h2>Counter Value : {counter}</h2>
     <button onClick={addValue}> Add Value</button>
     <br></br>
     <button onClick={removeValue}> Remove Value </button>
    </>
  )
}

export default App
