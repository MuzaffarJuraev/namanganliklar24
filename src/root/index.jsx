import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import App from '../containers/App';

export default () => {
  return (
      <Router>
        <App />
      </Router>
  );
};