import React, { useEffect } from "react";
import { Button } from "@mantine/core";
import { v4 as uuidv4 } from "uuid";
import { handleToggleFinished } from "../helpers/handleToggleFinished";

const Tasks = ({ columns, setColumns, tasks, setTasks }) => {
  const initialColumns = {
    [uuidv4()]: {
      name: "Tasks to Complete",
      items: tasks.filter((task) => !task.finished),
      finished: false,
    },
    [uuidv4()]: {
      name: "Finished tasks",
      items: tasks.filter((task) => task.finished),
      finished: true,
    },
  };

  useEffect(() => {
    setColumns(initialColumns);
    // eslint-disable-next-line
  }, [tasks]);

  return (
    <div className="tasks-container">
      {Object.entries(columns).map(([id, column]) => {
        const customTaskColor = column.finished ? "#4aec8c" : "#f54e4e";

        return (
          <div key={id}>
            <p style={{ color: customTaskColor }}>
              {tasks.length > 0 ? column.name : ""}
            </p>
            <div className="tasks-columns" style={{}}>
              {column.items.map((item, index) => {
                return (
                  <div
                    className="columns-items-container"
                    key={item.id}
                    style={{
                      color: customTaskColor,
                      borderColor: customTaskColor,
                      textDecoration: item.finished ? "line-through" : "none",
                    }}
                  >
                    <div className="task-name-container">{item.content}</div>

                    <Button
                      onClick={() =>
                        handleToggleFinished(item.id, setTasks, tasks)
                      }
                      color={item.finished ? "green" : "red"}
                    >
                      {item.finished ? "Finished" : "Not Finished"}
                    </Button>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Tasks;
