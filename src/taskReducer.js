/* eslint-disable no-undef */
const initialState = {
    tasks: [], // Initialize tasks as an empty array
  };
  
  const taskReducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_TASK:
        return {
          ...state,
          tasks: [...state.tasks, { id: Date.now(), ...action.payload }],
        };
      case DELETE_TASK:
        return {
          ...state,
          tasks: state.tasks.filter((task) => task.id !== action.payload),
        };
      default:
        return state;
    }
  };
  
  export default taskReducer;
  