import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App.tsx';

import './main.scss';

ReactDOM.createRoot(document.getElementById('app')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
