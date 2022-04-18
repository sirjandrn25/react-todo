import React from "react";
import { Form, Button } from "react-bootstrap";
import { UseTaskContext } from "../contexts/taskContext";
import { InputGroup,Spinner } from "react-bootstrap";


const AddTask = () => {
  const { createTask,is_loading,errors,access_token } = UseTaskContext();
  const [text, setText] = React.useState("");
  const [time,setTime] = React.useState(getCurrentTime());
  const [success,setSuccess] = React.useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const new_task = {
      title: text,
      is_complete: false,
      schedule_time:time
    };
    
    createTask(new_task).then(resp=>{
      if(resp){
        setSuccess(true)
      }else{
        setSuccess(false);

      }
    })
    
  };



  return (
    <>
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
      {success?<h3 className="text-success">New task successfully add</h3>:null}
      
    </>
    
  );
};


const getCurrentTime = ()=>{
  const d = new Date();
  let hours = d.getHours()<10?'0'+d.getHours().toString():d.getHours();
  const minutes = d.getMinutes()<10?'0'+d.getMinutes().toString():d.getMinutes();
  return `${hours}:${minutes}:00`;


}
export default AddTask;
