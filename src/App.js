import React, { useState } from 'react'
import useList from './components/Custom-Hooks/useList'
import './App.css';

export default function App() {
  const {list,push,pull} = useList()
  const [todo,setTodo] = useState("")

  const onSubmithandler=(event)=>{
    if(todo === "") {
      alert("Your Todo is empty. Please fill something")
      
    }
    else {
      event.preventDefault()
      push(todo)
      setTodo("")
    }
    }
    
  return (
    <>
    <div >
      <header className='container my-4'>
        <form className='row g-3' onSubmit={onSubmithandler}>
          <label  className="form-label"> <h1>Todo List - Organize Your Life & Work</h1> </label>
          <input type="text" value={todo} className="form-control"  autoComplete='off' onChange={(e)=>{setTodo(e.target.value)}} />
          <button className="btn btn-primary" type='submit'>Add Todo</button> 
        </form>
        
          {list.map((listItem,index)=>{
            return (
              <div key={index}>
              <h2><li>{listItem}</li></h2>  
                <button className="btn btn-danger" onClick={()=>{pull(index)}}>Remove</button>
              </div>
            )
          })}
        
      </header>
    </div>
    </>
  )
}


