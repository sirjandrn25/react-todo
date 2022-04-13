import React, { useState } from "react";

import TaskList from "./TaskList";
import "../App.css";
import { Card } from "react-bootstrap";
import AddTask from "./AddTask";

const Home = () => {
  return (
    
      
        <Card style={{ width: '40rem' }}>
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
