export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';

export const login = (usernameOrEmail, password) => {
  return (dispatch) => {
    // Simulate authentication
    if (usernameOrEmail === 'user' && password === 'password') {
      localStorage.setItem('token', 'your_token_id'); // Store token in local storage
      dispatch({ type: LOGIN });
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
