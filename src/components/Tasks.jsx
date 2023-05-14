import React, { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

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

  // build custom hook from this
  const handleToggleFinished = (id) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          return { ...task, finished: !task.finished };
        } else {
          return task;
        }
      })
    );
  };

  return (
    <div className="tasks-container">
      {Object.entries(columns).map(([id, column]) => {
        const customTaskColor = column.finished ? "#4aec8c" : "#f54e4e";
        return (
          <div key={id}>
            <p style={{ color: customTaskColor }}>
              {tasks.length > 0 ? column.name : ""}
            </p>
            <div style={{ background: "#30374b", padding: 4, height: "100%" }}>
              {column.items.map((item, index) => {
                return (
                  <div
                    key={item.id}
                    style={{
                      userSelect: "none",
                      padding: 16,
                      margin: "0 0 8px 0",
                      color: customTaskColor,
                      border: "1px",
                      borderColor: customTaskColor,
                      borderRadius: "10px",
                      borderStyle: "dashed",
                    }}
                  >
                    {/* REDO With button from mantine and with css on the stylesheet not inline. */}
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <input
                        type="checkbox"
                        checked={item.finished}
                        onChange={() => handleToggleFinished(item.id)}
                        style={{ marginRight: "8px" }}
                      />
                      {item.content}
                    </div>
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
