import * as React from "react";
import Home from "./routes/Home";

import ApiCall from './components/ApiCall';
import Loginform from "./routes/Loginform";
import RegisterForm from './routes/RegisterForm';
import { UseUserContext } from "./contexts/userContext";
import Header from './components/Header';
import {Routes,Route} from 'react-router-dom';


const App = () => {

  return (
    <>
    <Header />
      <div className="App-header">
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/login" element={<Loginform />} />
          <Route path="/register" element={<RegisterForm />} />

          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
        </Routes>
      </div>
    </>
    
  );
};

export default App;
