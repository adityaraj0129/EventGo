import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import AppState from './context/AppState';

let root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<React.StrictMode>
    <AppState>
    <App />
    </AppState>
  </React.StrictMode>)