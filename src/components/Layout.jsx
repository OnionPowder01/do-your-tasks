import React from "react";
import Tasks from "./Tasks";

import AddTask from "./AddTask";

const Layout = ({
  tasks,
  setTasks,
  taskName,
  setTaskName,
  columns,
  setColumns,
}) => {
  return (
    <>
      <div className="layout-container">
        <div className="add-task-container">
          <AddTask
            taskName={taskName}
            setTaskName={setTaskName}
            tasks={tasks}
            setTasks={setTasks}
            columns={columns}
            setColumns={setColumns}
          />
        </div>
        <div className="tasks-main-container">
          <Tasks columns={columns} setColumns={setColumns} tasks={tasks} />
        </div>
      </div>
    </>
  );
};

export default Layout;
