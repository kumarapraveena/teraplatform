import React from 'react'
import { useState } from 'react'

const Completed = ({Tnc,todo}) => {
    return (
    <div>
        <h3 style={{color:"green"}}>Completed Tasks Shown Here:</h3>
        {
Tnc?todo.map((item,index)=><div key={index}>{item}</div>):null
        }
        
        {/* Tnc?todo.map((item,index)=><div key={index}>{item}</div>):null */}
    </div>
  )
}

export default Completed