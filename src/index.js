import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Home from "./pages/home";
import Singlecell from './pages/singlecell'
import reportWebVitals from './reportWebVitals';
import {  Route } from 'react-router';
import { BrowserRouter, HashRouter } from "react-router-dom";
import { createHashHistory } from 'history';

const hashHistory = createHashHistory();

ReactDOM.render(

  <BrowserRouter>
    <App />
    <switch>
      <Route path="/" exact component={Home} />
      <Route path="/single-cell" exact component={Singlecell} />
    </switch>
  </BrowserRouter>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
