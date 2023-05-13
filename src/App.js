import Layout from "./components/Layout";
import React, { useState } from "react";

function App() {
  const [taskName, setTaskName] = useState("");
  const [tasks, setTasks] = useState([]);
  const [columns, setColumns] = useState([]);
  return (
    <main className="App-Container">
      <Layout
        tasks={tasks}
        setTasks={setTasks}
        taskName={taskName}
        setTaskName={setTaskName}
        columns={columns}
        setColumns={setColumns}
      />
    </main>
  );
}

export default App;
