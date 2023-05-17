import Tasks from "./components/Tasks";
import React, { useState } from "react";

function App() {
  const [taskName, setTaskName] = useState("");
  const [tasks, setTasks] = useState([]);
  const [columns, setColumns] = useState([]);

  return (
    <main className="App-Container">
      <div className="layout-container">
        <div className="tasks-main-container">
          <Tasks
            columns={columns}
            setColumns={setColumns}
            tasks={tasks}
            setTasks={setTasks}
            taskName={taskName}
            setTaskName={setTaskName}
          />
        </div>
      </div>
    </main>
  );
}

export default App;
