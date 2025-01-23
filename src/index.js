import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { BrowserRouter as Router } from 'react-router-dom'; // Import Router
import { thunk } from 'redux-thunk';
import reducer from './reducer';
import authReducer from './authReducer';
import App from './App';
import './index.css';

const rootReducer = combineReducers({
  tasks: reducer,
  auth: authReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
);
