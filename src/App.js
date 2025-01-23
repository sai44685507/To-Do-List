import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom'; // Import routing components
import Login from './components/login/Login'; // Import Login component
import Register from './components/register/register'; // Import Register component
import Navbar from './components/Navbar/Navbar'; // Import Navbar component
import './App.css';
import { useSelector } from 'react-redux';
import TaskManager from './components/TaskManager';
import Homepage from './components/Homepage/homepage'; // Updated path

function App() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated); // Check authentication state

  return (
    <div className="App">
      <Navbar /> {/* Include Navbar for navigation */}
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/task-manager" element={isAuthenticated ? <TaskManager /> : <Navigate to="/login" />} />
      </Routes>
    </div>
  );
}

export default App;
