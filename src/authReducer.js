import { LOGIN, LOGOUT, REGISTER } from './authActions';

// const initialState = {
//   isAuthenticated: false,
//   user: null,
// };

// const authReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case LOGIN:
//       return {
//         ...state,
//         isAuthenticated: true,
//         user: action.payload.usernameOrEmail,
//       };
//     case LOGOUT:
//       return {
//         ...state,
//         isAuthenticated: false,
//         user: null,
//       };
//     case REGISTER:
//       return {
//         ...state,
//         isAuthenticated: true,
//         user: action.payload.username,
//       };
//     default:
//       return state;
//   }
// };

// export default authReducer;

const initialState = {
  isAuthenticated: false,
  user: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
    case REGISTER:
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload,
      };
    case LOGOUT:
      return {
        ...state,
        isAuthenticated: false,
        user: null,
      };
    default:
      return state;
  }
};

export default authReducer;

