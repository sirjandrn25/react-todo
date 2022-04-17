import React, { useEffect } from "react";

import TaskList from "../components/TaskList";
import "../App.css";
import { Card } from "react-bootstrap";
import AddTask from "../components/AddTask";
import { useNavigate } from "react-router-dom";
import { UseUserContext } from "../contexts/userContext";
import { UseTaskContext } from "../contexts/taskContext";

const Home = () => {
  const navigate = useNavigate();
  const {is_loggedIn,handleLogout,access_token,is_loading} = UseUserContext();
  const {fetchTasks} = UseTaskContext();

  useEffect(()=>{
    if (window.localStorage.getItem('access')){
        fetchTasks().then(resp=>{
          console.log(resp)
          if(!resp){
            access_token().then(resp=>{
              if(!resp){
                handleLogout();
                navigate("/login");
              }
              else{
                fetchTasks().then(resp=>{
                  if(!resp){
                    handleLogout();
                    navigate("/login");
                  }
                })
              }
            })
          }
        }).catch(error=>{
          console.log(resp);
        })
    }else{
        handleLogout();
        navigate('/login');
    }
    
  },[])

  const bodyRender = ()=>{
      return (
        <Card.Body>
            <div>
              <AddTask />
            </div>
            <div className="listContainer">
              <TaskList />
            </div>
          </Card.Body>
      )
  }
  return (
    
      
        <Card style={{ width: '40rem' }}>
          {is_loading?"<h2>Loading.................</h2>":bodyRender()}
        </Card>
      
  );
};

export default Home;
