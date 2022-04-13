import React, { useState, useContext } from "react";


const TaskContext = React.createContext({
  tasks: [],
  createTask: () => {},
  modifyTask: () => {},
  deleteTask: () => {},
  is_loading:false
});

const default_task = { id: 1, title: "make todo app","schedule_time":"2:30", is_complete: true };

const TaskProvider = ({ children }) => {
  const [tasks, setTask] = useState([default_task]);
  const [is_loading,setLoading] = useState(false);

  const createTask = (task) => {
    setLoading(true)
    const new_task = { ...task, id: Math.floor(Math.random() * 10000) };
    
    
    setTimeout(()=>{
      setTask((state) => {
      return [new_task, ...state];
        });
      setLoading(false);
    },1000);
    
  };

  const deleteTask = (id) => {
    
    setTask(tasks.filter((task) => (task.id != id ? task : false)));
    
  };

  const modifyTask = (update_task) => {
    setTask(tasks.map(task=>task.id!=update_task.id?task:update_task));
  };

  return (
    <TaskContext.Provider value={{ tasks, createTask, deleteTask,modifyTask,is_loading }}>
      {children}
    </TaskContext.Provider>
  );
};

export function UseTaskContext() {
  const { tasks, createTask, modifyTask,deleteTask,is_loading } = useContext(TaskContext);
  
  return { tasks, createTask, deleteTask, modifyTask,is_loading };
}

export { TaskProvider };
export default TaskContext;
