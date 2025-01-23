import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../authActions'; // Corrected path
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './login.css';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Initialize useNavigate
  const [usernameOrEmail, setUsernameOrEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    const token = await dispatch(login(usernameOrEmail, password));
    if (token) {
      localStorage.setItem('token', token); // Store token in local storage
      navigate('/task-manager'); // Redirect to TaskManager after login
    }
  };

  return (
    <form onSubmit={handleLogin} className="login-form">
      <input
        type="text"
        value={usernameOrEmail}
        onChange={(e) => setUsernameOrEmail(e.target.value)}
        placeholder="Username or Email"
        required
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        required
      />
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
