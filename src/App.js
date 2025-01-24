// import React from 'react';
// import { Route, Routes, Navigate } from 'react-router-dom'; // Import routing components
// import { useSelector } from 'react-redux'; // Import useSelector for accessing state
// import Login from './components/login/Login'; // Import Login component
// import Register from './components/register/register'; // Import Register component
// import TaskManager from './components/TaskManager'; // Import TaskManager component
// import UserDashboard from './components/UserDashboard/UserDashboard'; // Import UserDashboard component
// import Navbar from './components/Navbar/Navbar'; // Import Navbar component
// import './App.css';
// import Homepage from './components/Homepage/homepage'; // Corrected import path

// const App = () => {
//   const isAuthenticated = useSelector((state) => state.auth.isAuthenticated); // Access authentication state

//   return (
//     <div className="App">
//       <Navbar /> {/* Include Navbar here */}
//       <Routes>
//         <Route path="/" element={<Homepage />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/register" element={<Register />} />
//         <Route path="/user-dashboard" element={isAuthenticated ? <UserDashboard /> : <Navigate to="/login" />} />
//         <Route path="/tasks" element={isAuthenticated ? <TaskManager /> : <Navigate to="/login" />} />
//       </Routes>
//     </div>
//   );
// };

// export default App;

import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Login from './components/login/Login';
import Register from './components/register/register';
import TaskManager from './components/TaskManager';
import UserDashboard from './components/UserDashboard/UserDashboard';
import Navbar from './components/Navbar/Navbar';
import Homepage from './components/Homepage/homepage';
import './App.css';

const App = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/user-dashboard" element={isAuthenticated ? <UserDashboard /> : <Navigate to="/login" />} />
        <Route path="/tasks" element={isAuthenticated ? <TaskManager /> : <Navigate to="/login" />} />
      </Routes>
    </div>
  );
};

export default App;

