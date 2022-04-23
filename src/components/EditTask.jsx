import React, { useEffect, useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";
import { UseTaskContext } from "../contexts/taskContext";
const EditTask = (props) => {
  const handleClose = () => props.setShow(false);
  const handleShow = () => props.setShow(true);
  
  return (
    <Modal show={props.show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Update Task</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <EditForm task={props.currTask} />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

const EditForm = (props) => {
  const [title, setTitle] = useState(props.task.title);
  const [time,setTime] = useState(props.task.schedule_time);
  const [checked,setChecked] = useState(props.task.is_complete);
  const [success,setSuccess] = useState(false);
  
  const {modifyTask,is_loading} = UseTaskContext();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const response = modifyTask({title:title,schedule_time:time,is_complete:checked},props.task.id);
    response.then(resp=>{
      if(resp){
        setSuccess(true)
      }else{
        setSuccess(false);
      }
    })
    
  };
  
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formTitle">
        <Form.Label>Title</Form.Label>
        <Form.Control
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter Title"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="FormScheduleTime">
        <Form.Label >Schedule Time</Form.Label>
        <Form.Control
        type="time"
        value={time}
        

       
        required
        onChange={e=>setTime(e.target.value)}
         />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicCheckbox">
       
        <Form.Check type="checkbox" checked={checked} onChange={() => setChecked(!checked)} label="Complete" />
      </Form.Group>
      <Button variant="primary" type="submit" disabled={is_loading}>
        {is_loading?"loading.....":"save"}
      </Button>
      {success?<p className="text-success">Successfully update the task</p>:null}
    </Form>
  );
};

export default EditTask;
