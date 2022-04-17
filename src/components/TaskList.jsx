import React, {useState} from "react";
import TaskContext, { UseTaskContext } from "../contexts/taskContext";
import { Table, Button,Row,Col,Spinner } from "react-bootstrap";
import { FaEdit, FaCheck, FaTrash } from "react-icons/fa";


import EditTask from "../components/EditTask";
const TaskList = () => {
  const { tasks, deleteTask,is_loading} = UseTaskContext();
  const [show, setShow] = useState(false);
  const [currTask, setCurrTask] = useState({});
 
  const handleDelete = (id)=>{
    deleteTask(id);
  }

  const Task = (task, index) => {
    return (
      <tr key={task.id}>
        <td>{index + 1}</td>
        <td>{task.title}</td>
        <td>
          {
            get12HourTimeFormat(task.schedule_time)
          }
        </td>
        <td>{task.is_complete ? <FaCheck /> : "X"}</td>

        <td>
          <span className="mr-1">
          <Button
            onClick={(e) => {
              setCurrTask(task);
              setShow(true);
            }}
          >
            <FaEdit />
          </Button>
          </span>
          <span className="ml-1">
            
          <Button variant="danger" disabled={is_loading?true:false} onClick={(e) => handleDelete(task.id)}>
            <FaTrash />
          </Button>
          </span>
        </td>
      </tr>
    );
  };

  return (
    <React.Fragment>
      <Table>
        <thead>
          <tr>
            <th>Sno</th>
            <th>Task</th>
            <th>Schedule Time</th>
            <th>Complete</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task, index) => {
            return Task(task, index);
          })}
        </tbody>
      </Table>
    
      <EditTask show={show} setShow={setShow} currTask={currTask} />
    </React.Fragment>
  );
};

const get12HourTimeFormat = (time)=>{
  const split_time = time.split(":");
  let hour = parseInt(split_time[0]);
  let minute = parseInt(split_time[1]);
  return hour > 12?`${hour-12}:${minute} PM`:`${hour}:${minute} AM`
}

export default TaskList;


