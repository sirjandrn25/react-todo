import React, { useContext, useState } from "react";
import TaskContext, { UseTaskContext } from "../contexts/taskContext";
import { Table, Button,Row,Col,Spinner } from "react-bootstrap";
import { FaEdit, FaCheck, FaTrash } from "react-icons/fa";

import EditTask from "../components/EditTask";
const TaskList = () => {
  const { tasks, deleteTask,is_loading } = UseTaskContext();
  const [show, setShow] = useState(false);
  const [currTask, setCurrTask] = useState({});
  const Task = (task, index) => {
    return (
      <tr key={task.id}>
        <td>{index + 1}</td>
        <td>{task.title}</td>
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
            
          <Button variant="danger" disabled={is_loading?true:false} onClick={(e) => deleteTask(task.id)}>
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
      {/* {tasks.map((task) => (
        <p>{task.id}</p>
      ))} */}
      <EditTask show={show} setShow={setShow} currTask={currTask} />
    </React.Fragment>
  );
};

export default TaskList;

// const Task = (props) => {
//   const { task, index, removeTask } = props;

//   return (
//     <tr key={task.id}>
//       <td>{index + 1}</td>
//       <td>{task.title}</td>
//       <td>{task.is_complete ? <FaCheck /> : "X"}</td>

//       <td>
//         <Button onClick={(e) => <EditTask show={true} />}>
//           <FaEdit />
//         </Button>
//         <Button onClick={(e) => removeTask(task.id)}>
//           <FaTrash />
//         </Button>
//       </td>
//     </tr>
//   );
// };
