import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.js'
import './style.css'
import { BrowserRouter } from 'react-router-dom'
// import { View, Alert, Button } from 'react-native';
// import Mailer from 'react-native-mail';

ReactDOM.render(
<BrowserRouter>
<App />
</BrowserRouter>, 
document.getElementById('root'))