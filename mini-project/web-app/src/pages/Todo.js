import React, { useState } from "react";

const Todo = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [priority, setPriority] = useState("Low");
  const [filter, setFilter] = useState("");

  const addTask = () => {
    if (newTask.trim()) {
      setTasks([
        ...tasks,
        { text: newTask, priority, completed: false, id: Date.now() },
      ]);
      setNewTask("");
      setPriority("Low");
    }
  };

  const toggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const filteredTasks = tasks.filter((task) =>
    task.text.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 py-8">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-xl">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          To-Do List
        </h1>
        
        {/* Input Section */}
        <div className="flex gap-4 mb-6">
          <input
            type="text"
            placeholder="Enter a task..."
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            className="flex-1 px-4 py-3 border rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <select
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
            className="px-4 py-3 border rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-500"
          >
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
          <button
            onClick={addTask}
            className="px-6 py-3 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition duration-300"
          >
            Add Task
          </button>
        </div>

        {/* Search Section */}
        <div className="mb-6">
          <input
            type="text"
            placeholder="Search tasks..."
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="w-full px-4 py-3 border rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        {/* Task List */}
        <ul className="space-y-4">
          {filteredTasks.map((task) => (
            <li
              key={task.id}
              className={`flex justify-between items-center p-4 border rounded-lg shadow-md ${
                task.completed ? "bg-green-100 line-through" : "bg-gray-100"
              } hover:bg-gray-200 transition duration-300`}
            >
              <div className="flex items-center gap-3">
                <span className="text-gray-800">{task.text}</span>
                <span
                  className={`text-xs px-2 py-1 rounded-full ${
                    task.priority === "Low"
                      ? "bg-green-200 text-green-800"
                      : task.priority === "Medium"
                      ? "bg-yellow-200 text-yellow-800"
                      : "bg-red-200 text-red-800"
                  }`}
                >
                  {task.priority}
                </span>
              </div>
              <div className="flex gap-3">
                <button
                  onClick={() => toggleComplete(task.id)}
                  className={`px-4 py-2 rounded-md text-white ${
                    task.completed ? "bg-gray-400" : "bg-green-600"
                  } hover:bg-green-700 transition duration-300`}
                >
                  {task.completed ? "Undo" : "Done"}
                </button>
                <button
                  onClick={() => deleteTask(task.id)}
                  className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition duration-300"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Todo;
