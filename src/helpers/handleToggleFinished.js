export const handleToggleFinished = (id, setTasks, tasks) => {
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
