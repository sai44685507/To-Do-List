import React, { useState } from 'react';
import { useSelector } from 'react-redux'; // Import useSelector for accessing state
import './TaskManager.css';

const TaskManager = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated); // Access authentication state
  const tasks = useSelector((state) => state.tasks); // Assuming tasks are stored in the Redux state
  const [selectedOption, setSelectedOption] = useState('');

  if (!isAuthenticated) {
    return <div>Please log in to view your tasks.</div>; // Message for unauthenticated users
  }

  const handleSelectChange = (event) => {
    const selectedValue = event.target.value;
    if (selectedValue === 'add') {
        window.location.href = '/add-task'; // Example URL for Add Task
    } else if (selectedValue === 'view') {
        window.location.href = '/view-tasks'; // Example URL for View Tasks
    } else if (selectedValue === 'delete') {
        window.location.href = '/delete-task'; // Example URL for Delete Task
    } else if (selectedValue === 'dashboard') {
        window.location.href = '/user-dashboard'; // Navigate to User Dashboard
    }
    setSelectedOption(selectedValue);
  };

  return (
    <div className="task-manager">
      <h2>Your Tasks</h2>
      <select onChange={handleSelectChange} value={selectedOption}>
        <option value="">Select an option</option>
        <option value="add">Add Task</option>
        <option value="view">View Tasks</option>
        <option value="delete">Delete Task</option>
        <option value="dashboard">User Dashboard</option> {/* Added option for User Dashboard */}
      </select>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </div>
  );
};

export default TaskManager;
