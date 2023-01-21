import logo from './logo.svg';
import './App.css';
import {useState} from "react"
import { useRef } from 'react';
import Completed from './Completed';
import Todo from './Todo';

function App() {
  const[val,setVal]=useState('')
  const[todo,setTodo]=useState([])
  const[data,setData]=useState('')
  const inputRef=useRef()
const handleInput=(e)=>{
//  inputRef.current.focus()
setVal(e.target.value)
  }
  const handleSubmit=(e)=>{
e.preventDefault()
// console.log(todo)
localStorage.setItem("todo-data",todo)
const newTodo=[...todo,val]
setTodo(newTodo)
console.log(todo)
//  localStorage.setItem("todo-data",todo)
 setVal("")
  }
  const handleAll=(e)=>{
     e.preventDefault()
    setData(localStorage.getItem("todo-data"))
    console.log(data)
  }
  const handleComplete=(e)=>{
e.preventDefault()

  }

  return (
    <div className="App">
      <h1>THINGS TO DO</h1>
      <form onSubmit={handleSubmit}>
      <input style={{height:"50px",width:"40%",borderRadius:"5px"}} type="text" name="val" value={val} placeholder="Add New" onChange={handleInput}/>
      <input  style={{height:"50px",width:"100px",borderRadius:"5px",padding:"0px"}}type="submit" value="Add"   name="Add"/>
      </form>
      <hr/>
     <Todo todo={todo}/>
      <div style={{width:"100%",height:"15vh",backgroundColor:"lightgreen",marginTop:"50px"}}>
<div style={{display:"flex",justifyContent:"space-around"}}>
  
  <button style={{width:"85px",height:"40px",borderRadius:"5px",backgroundColor:"pink"}} onClick={handleAll}>All</button>
  <button style={{width:"85px",height:"40px",borderRadius:"5px",backgroundColor:"pink"}}>Active</button>
  <button style={{width:"85px",height:"40px",borderRadius:"5px",backgroundColor:"pink"}} onClick={{handleComplete}}>Completed</button>
  
  {/* <button>All</button>
  <button>Active</button>
  <button>Completed</button> */}
  {/* {
    data
  } */}
</div>
      </div>
      <div style={{float:"left",border:"1px solid black"}}>
        <h3>All Tasks Shown Here:</h3>
      {data.split(",").map((item,index)=><p key={index} style={{color:"green"}}>{item}</p>)}
      </div>
    {/* {data.split(",").map((item,index)=><p key={index} style={{color:"green"}}>{item}</p>)} */}
    
  
      
      
    </div>
  );
}

export default App;
