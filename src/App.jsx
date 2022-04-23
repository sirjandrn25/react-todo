import * as React from "react";
import Home from "./routes/Home";


import Loginform from "./routes/Loginform";
import RegisterForm from './routes/RegisterForm';

import Header from './components/Header';
import {Outlet} from 'react-router-dom';
import RequireAuth from "./components/RequireAuth";
import Layout from "./components/Layout";

const App = () => {

  return (
    
    <div className="app_container">
      <Header />
      <Outlet />

    </div>
    
    
  );
};

export default App;
