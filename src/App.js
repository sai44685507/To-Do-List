import React from 'react';
import './App.css';
import { useSelector } from 'react-redux';
import TaskManager from './components/TaskManager';
import Homepage from './components/Homepage/homepage'; // Updated path

function App() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return (
    <div className="App">
      <h1>To-Do List App</h1>
      {isAuthenticated ? (
        <TaskManager />
      ) : (
        <Homepage /> // Render the Homepage if not authenticated
      )}
    </div>
  );
}

export default App;
