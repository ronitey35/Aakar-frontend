import React, { useState } from "react";
import TodoForm from "./components/TodoForm";
import Todolist from "./components/Todolist";

function App() {
  const [tasks,setTasks]= useState([])

  const addTask =(task)=> {
  setTasks([...tasks,{id:Date.now(),text:task,completed:false}])
  }

  const deleteTask =(id)=> {
     setTasks(tasks.filter((task)=> task.id !=id ))
  }
const toggle =(id)=>{
  setTasks(
    tasks.map((task)=>  task.id ==id ?  {...task,completed:!task.completed} :task )
  )
}

  return (
    <div >
     <TodoForm addTask={addTask}  />
     <Todolist tasks={tasks}  deleteTask={deleteTask} toggle={toggle}   />
    </div>
  );
}

export default App;