import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTask, deleteTask } from '../authActions'; // Corrected import path
import ViewTasks from '../functionality/ViewTasks/ViewTasks'; // Import ViewTasks
import './TaskManager.css';

const TaskManager = () => {
  const [task, setTask] = useState('');
  const [priority, setPriority] = useState('');
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks);

  const handleAddTask = (newTask) => {
    dispatch(addTask(newTask));
  };

  const handleDeleteTask = (index) => {
    dispatch(deleteTask(index)); // Dispatch delete action
  };

  return (
    <div>
      <form onSubmit={(e) => {
        e.preventDefault();
        if (task && priority) {
          handleAddTask({ task, priority });
          setTask('');
          setPriority('');
        }
      }}>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Add a new task"
          required
        />
        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          required
        >
          <option value="">Select Priority</option>
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>
        <button type="submit">Add Task</button>
      </form>
      <ViewTasks tasks={tasks} onDelete={handleDeleteTask} />
    </div>
  );
};

export default TaskManager;
