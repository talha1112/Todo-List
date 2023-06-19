import { SiAddthis } from "react-icons/si"
import { IoMdClose } from "react-icons/io";

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [list, setlist] = useState([])
  const [newtask, setnewtask] = useState("")
  const [textcolor, settextcolor] = useState("black")

  const handlechange=(event)=>{
    setnewtask(event.target.value)
  }
  const addtask = () =>{
    const task={
      id: list.length === 0? 1: list[list.length - 1].id+1,
      taskname:newtask,
    }  
    setlist([...list,task])
  }
  const deletebtn=(id)=>{
    setlist(list.filter((task) => task.id !== id))
  }
  const compbtn=(id)=>{
    setlist(list.filter((task) => task.id !== id))
  }
    
  return (
      <div className="todo">
        <div className="addtask">
        <input onChange={handlechange}placeholder=' Enter Task' /><button  onClick={addtask}><SiAddthis/>
        </button>
        </div>
          {list.map((task) => {
               return (
              <div className='lists'>
            
                <div style={{color:textcolor}} className="textdiv"><h2 className="text" >{task.taskname}</h2>
                </div>
                
                <input id="mycheckbox" type="checkbox" />
                <button id="deletebtn" onClick={()=>deletebtn(task.id)}><IoMdClose/>
                </button>
                
              </div>
              )          
      })}
    </div>
  )
}

export default App
