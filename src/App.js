import React,{useState} from "react";
import Task from "./components/Task";
import { Button } from "./components/Button";
import { Input } from "./components/Input";
import {appStyle, inputStyle} from "./styles/styles"
function TodoApp(){
  const [tasks, setTasks]=useState([]);
  const [task, setTask]=useState();
  const addTask=()=>{
    if(task.trim()!==""){
      setTasks([...tasks, {text:task, completed: false }]);
      setTask("");
    }
  };
  const completeTask=(index)=>{
    const newTasks=[...tasks];
    newTasks[index].completed=!newTasks[index].completed;
    setTasks(newTasks);
  };
  const removeTask=(index)=>{
    const newTasks=tasks.filter((_,i)=>i!==index);
    setTasks(newTasks);
  };
  return(
    <div style={appStyle}>
      <h3>Todo List</h3>
      <div>
        <Input 
          style={inputStyle}
          type="text"
          placeholder="Add a new task"
          value={task}
          handleOnChange={(e)=>setTask(e.target.value)}
        />
        <Button text="+" handleOnClick={addTask}/>
      </div>
      <div>
        {tasks.map((task, index)=>(
          <Task
            //key={index}
            index={index}
            task={task}
            completeTask={completeTask}
            removeTask={removeTask}
          />
        ))}
      </div>
    </div>
  );
};
export default TodoApp;