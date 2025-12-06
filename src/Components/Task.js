import { useEffect, useState } from "react";

export default function Task() {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);

  useEffect(() => {
    const storedTasks = localStorage.getItem("tasks");
    if (storedTasks) {
      setTaskList(JSON.parse(storedTasks));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(taskList));
  }, [taskList]);

  const handleAddTask = () => {
    if (task.trim() === "") return;
    setTaskList([...taskList, task]);
    setTask("");
  };

  const handleRemoveTask = (index) => {
    const newTaskList = [...taskList];
    newTaskList.splice(index, 1);
    setTaskList(newTaskList);
  };

  return (
    <div className="p-8">
      <h1 className="font-bold text-2xl mb-6">To Do List</h1>

      <div>
        <label className="block mb-2">Input Task:</label>
        <input
          type="text"
          placeholder="enter your task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          className="border p-2 rounded w-64"
        />
      </div>

      <button
        className="bg-blue-700 px-4 py-1 mt-4 text-white rounded-lg"
        onClick={handleAddTask}
      >
        Add Task
      </button>

      <div className="mt-6">
        {taskList.map((item, index) => (
          <div key={index} className="flex items-center justify-between">
            <p className="p-2 border-b">{item}</p>
            <button
              onClick={() => handleRemoveTask(index)}
              className="bg-red-600 px-4 py-1 text-white rounded-lg"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
