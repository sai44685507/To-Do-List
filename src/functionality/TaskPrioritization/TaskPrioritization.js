import React from 'react';
import './TaskPrioritization.css';

const TaskPrioritization = ({ tasks, onPrioritize }) => {
  return (
    <div className="task-prioritization">
      <h2>Prioritize Tasks</h2>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task}
            <select onChange={(e) => onPrioritize(index, e.target.value)}>
              <option value="">Select Priority</option>
              <option value="High">High</option>
              <option value="Medium">Medium</option>
              <option value="Low">Low</option>
            </select>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskPrioritization;
