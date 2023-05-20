export const handleRemoveTask = (item, setTasks, tasks, setTaskName) => {
  const updatedTasks = tasks.filter((task) => task.id !== item.id);
  setTasks(updatedTasks);
  setTaskName("");
};
