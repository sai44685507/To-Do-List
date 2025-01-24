export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const REGISTER = 'REGISTER';

export const login = (usernameOrEmail, password) => {
  return (dispatch) => {
    // Simulate authentication
    const token = "mockToken"; // Replace with actual token logic
    localStorage.setItem('token', token); // Store token in local storage
    dispatch({ type: LOGIN, payload: { usernameOrEmail, token } });
  };
};

export const logout = () => {
  localStorage.removeItem('token'); // Remove token from local storage
  return { type: LOGOUT };
};

export const register = (username, email, password) => {
  return (dispatch) => {
    // Simulate registration
    const token = "mockToken"; // Replace with actual token logic
    localStorage.setItem('token', token); // Store token in local storage
    dispatch({ type: REGISTER, payload: { username, email, token } });
  };
};
