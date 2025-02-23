import React from 'react'
import { useState } from 'react'

const TodoForm = ({addTask}) => {

    const [task,setTask] = useState("")

    const handleSumbit =(e)=> {
        e.preventDefault();
        addTask(task)
        setTask("")
    }
  return (
    <div>
        
      <form onSubmit={handleSumbit}>
        <input value={task} onChange={(e)=> setTask(e.target.value)} type="text" placeholder='Enter task' />
        <button type='submit'>Add</button>
      </form>

    </div>
  )
}

export default TodoForm