import React, { useState, useContext } from "react";
import axios from 'axios';


const TaskContext = React.createContext({
  tasks: [],
  fetchTasks: ()=>{},
  createTask: () => {},
  modifyTask: () => {},
  deleteTask: () => {},
  is_loading:false
});

const url = "https://dj-react-todo2022.herokuapp.com/api/v1"

const default_task = { id: 1, title: "make todo app","schedule_time":"2:30", is_complete: true };

const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([default_task]);
  const [is_loading,setLoading] = useState(false);

  const get_config = ()=>{
    let config = {
      headers:{
        Authorization:`Bearer ${window.localStorage.getItem('access')}`
      }
    }
    return config
  }
  const fetchTasks = async ()=>{
    setLoading(true);
    
    return await axios.get(`${url}/tasks/`,get_config()).then(resp=>{
      console.log(resp.data)
      const data = resp.data;
      setTasks(data);
      setLoading(false);
      return true;
    }).catch(error=>{
      console.log(error)
      setLoading(false);
      return false
    })

    // const response = 
  }
  const createTask = (task) => {
    setLoading(true)
    
    let config = get_config();
    
    axios.post(`${url}/tasks/`,task,config).then(resp=>{
      const data = resp.data
      setTasks([data,...tasks]);
      setLoading(false)
    }).catch(error=>{
      console.log(error.response.data)
      setLoading(false);
    });
    
  };

  const deleteTask = (id) => {
    
    setTask(tasks.filter((task) => (task.id != id ? task : false)));
    
  };

  const modifyTask = (update_task) => {
    setTask(tasks.map(task=>task.id!=update_task.id?task:update_task));
  };

  return (
    <TaskContext.Provider value={{ tasks, createTask, deleteTask,modifyTask,is_loading,fetchTasks }}>
      {children}
    </TaskContext.Provider>
  );
};

export function UseTaskContext() {
  const { tasks, createTask, modifyTask,deleteTask,is_loading ,fetchTasks} = useContext(TaskContext);
  
  return { tasks, createTask, deleteTask, modifyTask,is_loading,fetchTasks };
}

export { TaskProvider };
export default TaskContext;
