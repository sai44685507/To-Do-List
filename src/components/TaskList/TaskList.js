import React from 'react';
import { useSelector } from 'react-redux';

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks); // Assuming tasks are stored in the Redux state

  return (
    <ul>
      {tasks.map((task, index) => (
        <li key={index}>{task}</li>
      ))}
    </ul>
  );
};

export default TaskList;
