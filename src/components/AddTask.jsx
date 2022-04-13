import React from "react";
import { Form, Button } from "react-bootstrap";
import { UseTaskContext } from "../contexts/taskContext";
import { InputGroup,Spinner } from "react-bootstrap";


const AddTask = () => {
  const { createTask,is_loading } = UseTaskContext();
  const [text, setText] = React.useState("");
  const [time,setTime] = React.useState("");



  const handleSubmit = (e) => {
    e.preventDefault();
    const new_task = {
      title: text,
      is_complete: false,
      schedule_time:time
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
        
        <Form.Control
        type="time"
        required
        name="schedule_time"
        value={time}
        
        onChange = {e=>setTime(e.target.value)}
        
        
        />
          <Button type="submit" disabled={is_loading?true:false}>
            
              {!is_loading?"Add New":"Loading..."}
          </Button>
        

      </InputGroup>
      
    </Form>
  );
};


const getCurrentTime = ()=>{
  console.log("current time calling")
  
  console.log(curr_time)
  return curr_time


}
export default AddTask;
