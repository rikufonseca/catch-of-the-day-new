import React from 'react';
import ReactDOM from 'react-dom/client';
import MyRouter from './components/MyRouter';
import './css/style.css';
import reportWebVitals from './reportWebVitals';


const root = document.getElementById("root");
const rootElement = ReactDOM.createRoot(root);
rootElement.render(<MyRouter/>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
