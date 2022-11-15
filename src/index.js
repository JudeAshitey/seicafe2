import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from '../src/pages/App/App'
import { BrowserRouter as Router } from 'react-router-dom';


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);