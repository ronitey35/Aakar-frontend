import React from 'react'
import TodoItem from './TodoItem'

const Todolist = ({tasks,deleteTask,toggle}) => {
  return (
    <ul>
{tasks.map((task)=> (

<TodoItem task={task} key={task.id}  deleteTask={deleteTask} toggle={toggle} />  

))}

    </ul>
  )
}

export default Todolist