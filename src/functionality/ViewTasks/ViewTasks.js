import React from 'react';
import './ViewTasks.css';

const ViewTasks = ({ tasks, onDelete }) => {
  return (
    <div className="view-tasks">
      <h2>Your Tasks</h2>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task}
            <button onClick={() => onDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ViewTasks;
