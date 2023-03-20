import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';


import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js';

import '../src/assets/css/style.css'

import '../node_modules/primereact/resources/themes/lara-light-indigo/theme.css';
import "../node_modules/primereact/resources/primereact.min.css";     
import "../node_modules/primereact/core/core.js"             
import "../node_modules/primereact/toast/toast.cjs" 
import '../node_modules/primeicons/primeicons.css';

import {BrowserRouter as Router} from 'react-router-dom'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <App />
  </Router>
);

