import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { UserProvider } from "./contexts/userContext";
import { TaskProvider } from "./contexts/taskContext";

import {
  BrowserRouter,
  
} from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>

      <UserProvider>
        <TaskProvider>
          <App />
        </TaskProvider>
      </UserProvider>
    </BrowserRouter>
    
    
  </React.StrictMode>,
  document.getElementById('root')
)
