import * as React from "react";
import Home from "./components/Home";

import ApiCall from './components/ApiCall';
import Loginform from "./components/Loginform";
import RegisterForm from './components/RegisterForm';
import { UseUserContext } from "./contexts/userContext";
import Header from './components/Header';


const App = () => {
  const {is_loggedIn} = UseUserContext();
  return (
    <>
    <Header />
    <div className="App-header">
      {/* {is_loggedIn?<Home />:<Loginform/>} */}
      <RegisterForm />
    </div>
    </>
    
  );
};

export default App;
