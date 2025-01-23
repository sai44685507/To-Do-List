import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../../authActions'; // Corrected path
import './register.css';

const Register = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    const token = await dispatch(register({ name, email, password }));
    if (token) {
      localStorage.setItem('token', token); // Store token in local storage
    }
  };

  return (
    <form onSubmit={handleRegister} className="register-form">
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
        required
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        required
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        required
      />
      <button type="submit">Register</button>
    </form>
  );
};

export default Register;
