import React, { useState } from "react";
import { handleToggleFinished } from "../helpers/handleToggleFinished";
import { MdOutlineDoneOutline, MdOutlineRemoveDone } from "react-icons/md";
import { IoMdCreate } from "react-icons/io";
import { AiOutlineDelete } from "react-icons/ai";
import UpdateTask from "./UpdateTask";
import { HandleUpdateTaskClick } from "../helpers/handleUpdateTaskClick";

const TaskCard = ({
  tasks,
  setTasks,
  item,
  customTaskColor,
  opened,
  open,
  close,
  taskName,
  setTaskName,
  itemId,
  setItemId,
}) => {
  const handleRemoveTask = (item) => {
    const updatedTasks = tasks.filter((task) => task.id !== item.id);
    setTasks(updatedTasks);
    setTaskName("");
  };

  return (
    <>
      <UpdateTask
        tasks={tasks}
        setTasks={setTasks}
        customTaskColor={customTaskColor}
        taskName={taskName}
        setTaskName={setTaskName}
        itemId={itemId}
        opened={opened}
        close={close}
      />
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
        <div className="task-buttons-container">
          {item.finished ? (
            <MdOutlineRemoveDone
              onClick={() => handleToggleFinished(item.id, setTasks, tasks)}
              style={{ color: "#eee" }}
            />
          ) : (
            <MdOutlineDoneOutline
              onClick={() => handleToggleFinished(item.id, setTasks, tasks)}
              style={{ color: "#eee" }}
            />
          )}
          <IoMdCreate
            onClick={() =>
              HandleUpdateTaskClick(open, setTaskName, item, setItemId)
            }
            style={{ color: "#eee" }}
          />
          <AiOutlineDelete onClick={() => handleRemoveTask(item)} />
        </div>
      </div>
    </>
  );
};

export default TaskCard;
