import React, { useState } from "react";
import { Modal, Button, Group, TextInput } from "@mantine/core";

const UpdateTask = ({
  tasks,
  taskName,
  setTaskName,
  setTasks,
  itemId,
  opened,
  close,
}) => {
  const handleInputChange = (event) => {
    setTaskName(event.target.value);
  };

  const handleUpdateTasks = () => {
    const updatedTasks = tasks.map((task) => {
      if (itemId === task.id) {
        console.log(itemId);
        return { ...task, content: taskName };
      }
      return task;
    });
    console.log(itemId);

    setTasks(updatedTasks);
    close();
    setTaskName("");
  };

  return (
    <>
      <Modal opened={opened} onClose={close} withCloseButton={false}>
        <TextInput
          label="Task Name"
          placeholder="What are you working on?"
          type="text"
          value={taskName}
          name="taskName"
          onChange={handleInputChange}
          withAsterisk
        />
        <div className="add-task-button-container">
          <Button color="dark" variant="subtle" onClick={close}>
            Cancel
          </Button>
          <Button
            className="handle-add-task-button"
            color="dark"
            onClick={handleUpdateTasks}
          >
            Edit Task
          </Button>
        </div>
      </Modal>
    </>
  );
};

export default UpdateTask;
