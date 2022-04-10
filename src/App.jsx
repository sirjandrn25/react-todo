import * as React from "react";
import Home from "./components/Home";
import { TaskProvider } from "./contexts/taskContext";

const App = () => {
  return (
    
    <div className="App-header">
      
      <TaskProvider>
        <Home />
      </TaskProvider>
    </div>
  );
};

export default App;
