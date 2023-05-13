import { useDisclosure } from "@mantine/hooks";
import { Modal, Button, Group, TextInput } from "@mantine/core";
import { v4 as uuidv4 } from "uuid";

const AddTask = ({ taskName, setTaskName, setTasks, tasks }) => {
  const [opened, { open, close }] = useDisclosure(false);

  const handleInputChange = (event) => {
    setTaskName(event.target.value);
  };

  const handleAddTask = () => {
    const newTask = { id: uuidv4(), content: taskName, finished: false };
    setTasks([...tasks, newTask]);
    setTaskName("");
    close();
  };

  return (
    <>
      <Modal opened={opened} onClose={close} title="Add your task">
        <TextInput
          label="Task Name"
          placeholder="What are your working on ?"
          type="text"
          value={taskName}
          name="taskName"
          onChange={handleInputChange}
          withAsterisk
        />
        <Button
          className="handle-add-task-button"
          color="dark"
          onClick={handleAddTask}
        >
          Add Task
        </Button>
      </Modal>

      <Group position="center">
        <Button onClick={open}>Add a new task</Button>
      </Group>
    </>
  );
};

export default AddTask;
