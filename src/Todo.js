import React from 'react'
import { useState } from 'react'
import App from './App'
import Completed from './Completed'

const Todo = ({todo}) => {
  const[Tnc,setTnc]=useState(false)
    // console.log(todo)
  return (
    <div>
        {
          todo.map((item,index)=><div>
            <h3> <input type="checkbox"  checked={Tnc} onChange={(e)=>{setTnc(e.target.checked)}}/><span>{item}</span> </h3><hr/>
          </div>) 
            
        }
        <Completed Tnc={Tnc} todo={todo}/>
        {/* <App Tnc={Tnc}/> */}
  </div>
  )
}

export default Todo