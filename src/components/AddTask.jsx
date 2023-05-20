import React from "react";
import { v4 as uuidv4 } from "uuid";
import { Modal, Button, Group, TextInput } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

const AddTask = ({ taskName, setTaskName, setTasks, tasks }) => {
  const [opened, { open, close }] = useDisclosure(false);

  const handleInputChange = (event) => {
    setTaskName(event.target.value);
  };

  const handleAddTasks = () => {
    const newTask = { id: uuidv4(), content: taskName, finished: false };
    setTasks([...tasks, newTask]);
    setTaskName("");
    close();
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
          <Button color="dark" variant="subtle" onClick={() => close()}>
            Cancel
          </Button>
          <Button
            className="handle-add-task-button"
            color="dark"
            onClick={handleAddTasks}
          >
            Add task
          </Button>
        </div>
      </Modal>
      <Group position="center">
        <Button className="add-task-button" onClick={() => open()}>
          Add Task
        </Button>
      </Group>
    </>
  );
};

export default AddTask;
