import React from 'react'

const TodoItem = ({task,deleteTask,toggle}) => {
  return (
    <li   className={`${task.completed && 'line-through'}`}   >
      <span>{task.text}</span>
      <button onClick={()=> deleteTask(task.id)}>delete</button>
      <input type="checkbox" onChange={()=> toggle(task.id)} />
 </li>
  )
}

export default TodoItem