import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { appState } from './redux/store.js';
// import { Provider } from '../node_modules/react-redux/dist/react-redux.js';
import { Provider } from 'react-redux';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={appState}>
      <App />
    </Provider>
  </React.StrictMode>
);
