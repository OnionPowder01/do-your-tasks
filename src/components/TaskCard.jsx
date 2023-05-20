import React from "react";
import { handleToggleFinished } from "../helpers/handleToggleFinished";
import { MdOutlineDoneOutline, MdOutlineRemoveDone } from "react-icons/md";
import { IoMdCreate } from "react-icons/io";
import { AiOutlineDelete } from "react-icons/ai";
import UpdateTask from "./UpdateTask";
import { HandleUpdateTaskClick } from "../helpers/handleUpdateTaskClick";
import { handleRemoveTask } from "../helpers/handleRemoveTask";

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
            />
          ) : (
            <MdOutlineDoneOutline
              onClick={() => handleToggleFinished(item.id, setTasks, tasks)}
            />
          )}
          <IoMdCreate
            onClick={() =>
              HandleUpdateTaskClick(open, setTaskName, item, setItemId)
            }
          />
          <AiOutlineDelete
            onClick={() => handleRemoveTask(item, setTasks, tasks, setTaskName)}
          />
        </div>
      </div>
    </>
  );
};

export default TaskCard;
