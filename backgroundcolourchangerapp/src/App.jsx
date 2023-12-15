
import { useState } from 'react'
import './App.css'

function App() {
  
  const [colour , SetColour] = useState("olive")

  return (
     <div 
       style={{backgroundColor: colour, width: "100vw", height: '100vh', margin: '0', padding: '0'}}>
      
            <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">

            <div className='flex flex-wrap justify-center bg-white px-3 py-2 rounded-3xl shadow-lg' >

            <button className='outline-none px-4 py-1 mx-2 rounded-full text-white shadow-md' style={{backgroundColor:"red"}} 
            onClick={()=>SetColour("red")}>red</button>

            <button className='outline-none px-4 py-1 mx-2 rounded-full text-white shadow-md' style={{backgroundColor:"olive"}}
            onClick={()=>SetColour("olive")}>olive</button>
            
            <button className='outline-none px-4 py-1 mx-2 rounded-full text-white shadow-md' style={{backgroundColor:"black"}}
            onClick={()=>SetColour("black")}>black</button>
            
            <button className='outline-none px-4 py-1 mx-2 rounded-full text-white shadow-md' style={{backgroundColor:"orange"}}
            onClick={()=>SetColour("orange")}>orange</button>
            
            <button className='outline-none px-4 py-1 mx-2 rounded-full text-white shadow-md' style={{backgroundColor:"green"}}
          onClick={()=>SetColour("green")}>green</button>
            
</div>
</div>
         
      </div>
    

   
    
   
  )
}

export default App
