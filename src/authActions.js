// import bcrypt from 'bcryptjs'; // Import bcrypt for password hashing

// export const LOGIN = 'LOGIN';
// export const LOGOUT = 'LOGOUT';
// export const REGISTER = 'REGISTER';

// const generateRandomToken = () => {
//   return Math.random().toString(36).substr(2); // Generate a random token
// };

// const isValidEmail = (email) => {
//   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Simple email regex
//   return emailRegex.test(email);
// };

// const isStrongPassword = (password) => {
//   return password.length >= 8; // Check for minimum length
// };

// export const login = (usernameOrEmail, password) => {
//   return (dispatch) => {
//     const storedEmail = localStorage.getItem('email'); // Retrieve stored email
//     const storedHashedPassword = localStorage.getItem('hashedPassword'); // Retrieve stored hashed password

//     if (usernameOrEmail === storedEmail) {
//       // Check if the email matches
//       if (bcrypt.compareSync(password, storedHashedPassword)) {
//         const token = localStorage.getItem('token') || "mockToken"; // Use existing token or mock token
//         localStorage.setItem('token', token); // Store token in local storage
//         dispatch({ type: LOGIN, payload: { usernameOrEmail, token } });
//         alert('Successfully logged in!'); // Show success message
        
//         window.location.href = '/user-dashboard'; // Redirect to User Dashboard after login
//       } else {
//         alert('Incorrect password.'); // Handle incorrect password
//       }
//     } else {
//       alert('Email not found.'); // Handle email not found
//     }
//   };
// };

// export const logout = () => {
//   localStorage.removeItem('token'); // Remove token from local storage
//   return { type: LOGOUT };
// };

// export const register = (username, email, password) => {
//   return (dispatch) => {
//     if (!isValidEmail(email)) {
//       alert('Invalid email format.'); // Handle invalid email
//       return;
//     }
//     if (!isStrongPassword(password)) {
//       alert('Password must be at least 8 characters long.'); // Handle weak password
//       return;
//     }

//     const existingEmail = localStorage.getItem('email'); // Check if email already exists
//     if (existingEmail === email) {
//       alert('Email already exists. Please use a different email.'); // Handle existing email
//       return;
//     }

//     const hashedPassword = bcrypt.hashSync(password, 10); // Hash the password
//     const token = generateRandomToken(); // Generate a random token
//     localStorage.setItem('email', email); // Store email in local storage
//     localStorage.setItem('hashedPassword', hashedPassword); // Store hashed password in local storage
//     localStorage.setItem('token', token); // Store token in local storage
//     dispatch({ type: REGISTER, payload: { username, email, token } });
//     alert('Registration successful!'); // Show success message
//     window.location.href = '/user-dashboard'; // Redirect to User Dashboard after registration
//   };
// };

import bcrypt from 'bcryptjs';

export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const REGISTER = 'REGISTER';

export const login = (usernameOrEmail, password, navigate) => {
  return (dispatch) => {
    const storedEmail = localStorage.getItem('email');
    const storedHashedPassword = localStorage.getItem('hashedPassword');
    

    if (usernameOrEmail === storedEmail) {
      if (bcrypt.compareSync(password, storedHashedPassword)) {
        const token = localStorage.getItem('token') || 'mockToken';
        localStorage.setItem('token', token);
        dispatch({ type: LOGIN, payload: { usernameOrEmail, token } });
        navigate('/user-dashboard'); // Navigate to User Dashboard
      } else {
        alert('Incorrect password.');
      }
    } else {
      alert('Email not found.');
    }
  };
};

export const register = (username, email, password, navigate) => {
  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email regex
    return emailRegex.test(email);
  };
  
  const isStrongPassword = (password) => {
    return password.length >= 8; // Checks if the password has at least 8 characters
  };
  
  const generateRandomToken = () => {
    return Math.random().toString(36).substr(2); // Simple random token generation
  };
  
  return (dispatch) => {
    if (!isValidEmail(email)) {
      alert('Invalid email format.');
      return;
    }
    if (!isStrongPassword(password)) {
      alert('Password must be at least 8 characters long.');
      return;
    }

    const hashedPassword = bcrypt.hashSync(password, 10);
    const token = generateRandomToken();
    localStorage.setItem('email', email);
    localStorage.setItem('hashedPassword', hashedPassword);
    localStorage.setItem('token', token);
    dispatch({ type: REGISTER, payload: { username, email, token } });
    alert('Registration successful!');
    navigate('/user-dashboard'); // Navigate to User Dashboard
  };
};

