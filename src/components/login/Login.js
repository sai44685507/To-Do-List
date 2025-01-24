// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { login } from '../../authActions'; // Corrected path
// import { useNavigate } from 'react-router-dom'; // Import for navigation
// import './login.css';

// const Login = () => {
//   const [usernameOrEmail, setUsernameOrEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     dispatch(login(usernameOrEmail, password));
//     navigate('/user-dashboard'); // Redirect to homepage after login

//   };

//   return (
//     <form className="login-form" onSubmit={handleSubmit}>
//       <input
//         type="text"
//         placeholder="Username or Email"
//         value={usernameOrEmail}
//         onChange={(e) => setUsernameOrEmail(e.target.value)}
//         required
//       />
//       <input
//         type="password"
//         placeholder="Password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//         required
//       />
//       <button type="submit">Login</button>
//     </form>
//   );
// };

// export default Login;

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../authActions'; // Corrected path
import { useNavigate } from 'react-router-dom';
import './login.css';

const Login = () => {
  const [usernameOrEmail, setUsernameOrEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(usernameOrEmail, password, navigate)); // Pass navigate to the action
  };

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Username or Email"
        value={usernameOrEmail}
        onChange={(e) => setUsernameOrEmail(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;

