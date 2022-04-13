import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { UserProvider } from "./contexts/userContext";
import { TaskProvider } from "./contexts/taskContext";

ReactDOM.render(
  <React.StrictMode>
    <UserProvider>
      <TaskProvider>
        <App />
      </TaskProvider>
    </UserProvider>
    
  </React.StrictMode>,
  document.getElementById('root')
)
