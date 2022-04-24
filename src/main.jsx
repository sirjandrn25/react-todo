import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { UserProvider } from "./contexts/userContext";
import { TaskProvider } from "./contexts/taskContext";

import {
  BrowserRouter,
  Routes,
  Route
  
} from "react-router-dom";
import Loginform from "./routes/Loginform";
import RegisterForm from './routes/RegisterForm';
import Home from "./routes/Home";
import Layout from "./components/Layout";
import Account from './routes/Account';
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>

      <UserProvider>
        <TaskProvider>
          <Routes>
            <Route path="/" element={<App />} >
              <Route index element={<Layout />} />
              <Route path="/home" element={<Home/>} />
              <Route path="/account" element={<Account />} />
              <Route path="/login" element={<Loginform/>} />
              <Route path="/register" element={<RegisterForm />} />
            </Route>
          </Routes>
          
        </TaskProvider>
      </UserProvider>
    </BrowserRouter>
    
    
  </React.StrictMode>,
  document.getElementById('root')
)
