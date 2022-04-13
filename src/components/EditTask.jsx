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
  
  const {modifyTask} = UseTaskContext();
  
  const handleSubmit = (e) => {
    e.preventDefault();
   
    // modifyTask({...props.task,is_complete:checked,title:title});
    // console.log(task);
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
        min="09:00"
        max="18:00"

       
        required
        onChange={e=>setTime(e.target.value)}
         />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicCheckbox">
       
        <Form.Check type="checkbox" checked={checked} onChange={() => setChecked(!checked)} label="Complete" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Save
      </Button>
    </Form>
  );
};

export default EditTask;
