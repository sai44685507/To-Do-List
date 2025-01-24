import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask, deleteTask } from "../../actions"; // Import actions
import "./UserDashboard.css";

const UserDashboard = () => {
  const [taskName, setTaskName] = useState("");
  const [taskPriority, setTaskPriority] = useState("Medium");
  const [taskDueDate, setTaskDueDate] = useState("");
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks.tasks) || []; // Access tasks from Redux state

  // Handle adding a task
  const handleAddTask = (e) => {
    e.preventDefault();
    if (taskName.trim()) {
      dispatch(addTask({ name: taskName, priority: taskPriority, dueDate: taskDueDate }));
      setTaskName("");
      setTaskPriority("Medium");
      setTaskDueDate("");
    } else {
      alert("Task name cannot be empty!");
    }
  };

  // Handle deleting a task
  const handleDeleteTask = (taskId) => {
    dispatch(deleteTask(taskId));
  };

  // Scroll to section handler
  const handleScroll = (targetSelector) => {
    const element = document.querySelector(targetSelector);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    } else {
      console.error(`Element with selector ${targetSelector} not found.`);
    }
  };

  return (
    <div className="dashboard-container">
      {/* Sidebar for Navigation */}
      <div className="sidebar">
        <h2>Dashboard</h2>
        <ul className="sidebar-options">
          <li onClick={() => handleScroll(".add-task-section")}>Add Task</li>
          <li onClick={() => handleScroll(".task-list")}>View Tasks</li>
          <li>Delete Task</li>
        </ul>
      </div>

      {/* Sidebar Toggle Button */}
      <button className="sidebar-toggle">
        ☰
      </button>

      {/* Main Content Area */}
      <div className="main-dashboard">
        <div className="header">
          <h1>User Dashboard</h1>
        </div>

        {/* Add Task Section */}
        <section className="add-task-section">
          <h2>Add a Task</h2>
          <form onSubmit={handleAddTask} className="add-task-form">
            <input
              type="text"
              placeholder="Task Name"
              value={taskName}
              onChange={(e) => setTaskName(e.target.value)}
              required
            />
            <select
              value={taskPriority}
              onChange={(e) => setTaskPriority(e.target.value)}
            >
              <option value="High">High</option>
              <option value="Medium">Medium</option>
              <option value="Low">Low</option>
            </select>
            <input
              type="date"
              value={taskDueDate}
              onChange={(e) => setTaskDueDate(e.target.value)}
            />
            <button type="submit">Add Task</button>
          </form>
        </section>

        {/* Task List Section */}
        <section className="view-tasks-section">
          <h2>Task List</h2>
          {tasks.length === 0 ? (
            <p>No tasks added yet!</p>
          ) : (
            <ul className="task-list">
              {tasks.map((task) => (
                <li key={task.id} className="task-item">
                  <div>
                    <p><strong>{task.name}</strong></p>
                    <p>Priority: {task.priority}</p>
                    <p>Due Date: {task.dueDate || "No Due Date"}</p>
                  </div>
                  <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
                </li>
              ))}
            </ul>
          )}
        </section>
      </div>
    </div>
  );
};

export default UserDashboard;
