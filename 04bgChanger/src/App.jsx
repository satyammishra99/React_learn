import { useState } from 'react'

function App() {
  const [color, setColor] = useState("olive")

  return (
    <div className='w-full h-screen' style={{backgroundColor: color}}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 py-2" style={{color:"#000"}}>
      <div className='flex flex-wrap justify-center gap-2 shadow-lg bg-red-50   px-2 py-2 rounded-lg'>
        <button className='outline-none px-4  rounded-lg '
        style={{backgroundColor: "red"}} onClick={()=>setColor("red")}>
          Red
        </button>
        <button className='outline-none px-4  rounded-lg '
        style={{backgroundColor: "orange"}} onClick={()=>setColor("orange")}>
          Red
        </button>
        <button className='outline-none px-4  rounded-lg '
        style={{backgroundColor: "green"}} onClick={()=>setColor("green")}>
          Red
        </button>
        <button className='outline-none px-4  rounded-lg '
        style={{backgroundColor: "pink"}} onClick={()=>setColor("pink")}>
          Red
        </button>
        <button className='outline-none px-4  rounded-lg '
        style={{backgroundColor: "lavender"}} onClick={()=>setColor("lavender")}>
          Red
        </button>

      </div>
      </div>
    </div>
  )
}

export default App
