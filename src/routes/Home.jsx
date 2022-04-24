import React, { useEffect } from "react";

import TaskList from "../components/TaskList";
import "../App.css";
import { Card } from "react-bootstrap";
import AddTask from "../components/AddTask";
import { useNavigate } from "react-router-dom";
import { UseUserContext } from "../contexts/userContext";






const Home = () => {
  const {is_loading,access_token} = UseUserContext();
  const navigate = useNavigate();
  useEffect(()=>{
    const response = access_token();
    response.then(resp=>{
      if(!resp){
        navigate('/login')
      }
    })
  },[])
  return (
    <div className="home">
      {is_loading?<Loading />:<CardBody />}
    
    </div>
    
    
  )
};


const Loading = ()=>{
  return (
    <h1 className="text-primary">loading .....</h1>
  )
}

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
