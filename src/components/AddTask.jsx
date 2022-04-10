import React from "react";
import { Form, Button } from "react-bootstrap";
import { UseTaskContext } from "../contexts/taskContext";
import { InputGroup,Spinner } from "react-bootstrap";

const AddTask = () => {
  const { createTask,is_loading } = UseTaskContext();


  const [text, setText] = React.useState("");
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const new_task = {
      title: text,
      is_complete: false
    };
    createTask(new_task);
  };

  return (
    <Form onSubmit={handleSubmit}>
      
      <InputGroup className="mb-3">
      
          <Form.Control
            type="text"
            required
            name="task"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Add New Task"
          />
        
        
          <Button type="submit" disabled={is_loading?true:false}>
            
              {!is_loading?"Add New":"Loading..."}
          </Button>
        

      </InputGroup>
      
    </Form>
  );
};

export default AddTask;
