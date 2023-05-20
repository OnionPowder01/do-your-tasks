import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HeroImageRight } from "./components/HeroSection";
import Tasks from "./components/Tasks";
import React, { useState } from "react";

function App() {
  const [taskName, setTaskName] = useState("");
  const [tasks, setTasks] = useState([]);
  const [columns, setColumns] = useState([]);

  return (
    <Router>
      <div className="App-Container">
        <div className="tasks-main-container">
          <Routes>
            <Route path="/" element={<HeroImageRight />} />
            <Route
              path="/task-manager"
              element={
                <Tasks
                  columns={columns}
                  setColumns={setColumns}
                  tasks={tasks}
                  setTasks={setTasks}
                  taskName={taskName}
                  setTaskName={setTaskName}
                />
              }
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
