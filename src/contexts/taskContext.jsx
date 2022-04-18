import React, { useState, useContext } from "react";
import axios from 'axios';


const TaskContext = React.createContext({
  tasks: [],
  fetchTasks: ()=>{},
  createTask: () => {},
  modifyTask: () => {},
  deleteTask: () => {},
  is_loading:false,
  errors:[],
});

const url = "https://dj-react-todo2022.herokuapp.com/api/v1"

const default_task = { id: 1, title: "make todo app","schedule_time":"2:30", is_complete: true };

const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([default_task]);
  const [is_loading,setLoading] = useState(false);
  const [error,setError] = useState({});

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
      
      const data = resp.data;
      setTasks(data);
      setLoading(false);
      return true;
    }).catch(error=>{
      setError(error.response.data);
      setLoading(false);
      return false
    })

    // const response = 
  }
  const createTask = async (task) => {
    setLoading(true)
    
    let config = get_config();
    
    return await axios.post(`${url}/tasks/`,task,config).then(resp=>{
      const data = resp.data
      setTasks([data,...tasks]);
      setLoading(false);
      return true
    }).catch(error=>{
      setError(error.response.data);
      setLoading(false);
      return false
    });
    
  };

  const deleteTask = async (id) => {
    setLoading(true);
    let config = get_config();
    return await axios.delete(`${url}/tasks/${id}/`,config).then(resp=>{
      console.log(resp)
      setTasks(tasks.filter((task) => (task.id != id ? task : false)));
      setLoading(false);
      return true
    }).catch(error=>{
      console.log(error.response.data);
      setError(error.response.data);
      setLoading(false);
      return false
    })
  };

  const modifyTask = async (update_task,id) => {
    setLoading(true)
    const config = get_config();
    return await axios.put(`${url}/tasks/${id}/`,update_task,config).then(resp=>{
      const data = resp.data
      // console.log(data)
      setTasks(tasks.map(task=>task.id!=data.id?task:data));
      setLoading(false);
      return true
    }).catch(error=>{
      // console.log(error);
      setLoading(false);
      return false;
    })
    // setTasks(tasks.map(task=>task.id!=update_task.id?task:update_task));
  };

  return (
    <TaskContext.Provider value={{ tasks, createTask, deleteTask,modifyTask,is_loading,fetchTasks,error }}>
      {children}
    </TaskContext.Provider>
  );
};

export function UseTaskContext() {
  const { tasks, createTask, modifyTask,deleteTask,is_loading ,fetchTasks,error} = useContext(TaskContext);
  
  return { tasks, createTask, deleteTask, modifyTask,is_loading,fetchTasks,error };
}

export { TaskProvider };
export default TaskContext;
