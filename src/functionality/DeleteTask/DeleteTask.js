import React from 'react';
import './DeleteTask.css';

const DeleteTask = ({ tasks, onDelete }) => {
  return (
    <div className="delete-task">
      <h2>Delete Tasks</h2>
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

export default DeleteTask;
