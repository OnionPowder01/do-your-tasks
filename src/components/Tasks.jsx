import React, { useEffect, useState } from "react";
import { useDisclosure } from "@mantine/hooks";
import { v4 as uuidv4 } from "uuid";
import TaskCard from "./TaskCard";
import AddTask from "./AddTask";

const Tasks = ({
  columns,
  setColumns,
  tasks,
  setTasks,
  taskName,
  setTaskName,
}) => {
  const [opened, { open, close }] = useDisclosure(false);
  const [itemId, setItemId] = useState("");

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
    <>
      <AddTask
        taskName={taskName}
        setTaskName={setTaskName}
        tasks={tasks}
        setTasks={setTasks}
        columns={columns}
        setColumns={setColumns}
      />
      <div className="tasks-container" key={uuidv4()}>
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
                    <>
                      <TaskCard
                        tasks={tasks}
                        setTasks={setTasks}
                        item={item}
                        customTaskColor={customTaskColor}
                        taskName={taskName}
                        setTaskName={setTaskName}
                        opened={opened}
                        open={open}
                        close={close}
                        itemId={itemId}
                        setItemId={setItemId}
                      />
                    </>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Tasks;
