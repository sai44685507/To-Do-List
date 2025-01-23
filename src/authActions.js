export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const REGISTER = 'REGISTER';

export const login = (usernameOrEmail, password) => {
  return (dispatch) => {
    // Simulate authentication
    if (usernameOrEmail === 'user' && password === 'password') {
      const token = 'your_token_id'; // Simulated token
      localStorage.setItem('token', token); // Store token in local storage
      dispatch({ type: LOGIN }); // Dispatch LOGIN action
      return token; // Return the token
    } else {
      alert('Invalid credentials'); // Handle invalid login attempt
    }
  };
};

export const logout = () => {
  localStorage.removeItem('token'); // Remove token from local storage
  return {
    type: LOGOUT,
  };
};

export const register = (userData) => {
  return (dispatch) => {
    // Simulate registration process
    console.log('Registering user:', userData);
    const token = 'your_token_id'; // Simulated token for registration
    localStorage.setItem('token', token); // Store token in local storage
    dispatch({ type: REGISTER, payload: userData }); // Dispatch REGISTER action
    return token; // Return the token
  };
};

// New functions for task management
export const addTask = (task) => {
  return {
    type: 'ADD_TASK',
    payload: task,
  };
};

export const deleteTask = (index) => {
  return {
    type: 'DELETE_TASK',
    payload: index,
  };
};
