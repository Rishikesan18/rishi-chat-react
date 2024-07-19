import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {io} from "socket.io-client";
import axios from 'axios';


axios.defaults.baseURL = 'http://localhost:8000/api/'
axios.defaults.headers["Authorization"] = `Bearer ${localStorage.getItem('token')}`


export const socket = io("ws://localhost:8080/", {});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


reportWebVitals();
