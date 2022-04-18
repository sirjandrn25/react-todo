import React, { useEffect } from "react";

import TaskList from "../components/TaskList";
import "../App.css";
import { Card } from "react-bootstrap";
import AddTask from "../components/AddTask";
import { useNavigate } from "react-router-dom";
import { UseUserContext } from "../contexts/userContext";
import { UseTaskContext } from "../contexts/taskContext";
import { render } from "react-dom";






const Home = () => {
  const navigate = useNavigate();
  const {is_loggedIn,handleLogout,access_token,is_loading} = UseUserContext();
  const {fetchTasks} = UseTaskContext();

  useEffect(()=>{
    if(!is_loggedIn && !is_loading){
      navigate('/login')
    }
  },[is_loggedIn])


  
  return (
    <CardBody />
  )
};

const CardBody = ()=>{
  return (
    <Card style={{width:"40rem"}}>
          <Card.Body>
            <div>
              <AddTask />
            </div>
            <div className="listContainer">
              <TaskList />
            </div>
          </Card.Body>
  </Card>
  )
}

export default Home;
