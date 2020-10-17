import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

require('dotenv').config()
console.log(process.env.IP_API)
console.log(process.env.PORT_API)
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


