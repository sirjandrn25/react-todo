import React, { useState } from "react";

import TaskList from "./TaskList";
import "../App.css";
import { Card, Container } from "react-bootstrap";
import AddTask from "./AddTask";

const Home = () => {
  return (
    
      
        <Card style={{ width: '30rem' }}>
          <Card.Body>
            <div>
              <AddTask />
            </div>
            <div className="listContainer">
              <TaskList />
            </div>
          </Card.Body>
        </Card>
      
  );
};

export default Home;
