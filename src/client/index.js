import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import '../assets/style.css';

ReactDOM.hydrate(
  <App />
  , document.getElementById('root'));

  if (module.hot) {
    module.hot.accept();
  }
