import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Home from "./pages/home";
import Singlecell from './pages/singlecell'
import reportWebVitals from './reportWebVitals';
import Genemarker from "./pages/genemarker";
import Insitumap from "./pages/insitumap";
import { Route } from 'react-router';
import { BrowserRouter, HashRouter } from "react-router-dom";
import { createHashHistory } from 'history';

const hashHistory = createHashHistory();

ReactDOM.render(

  <BrowserRouter>
    <App />
    <switch>
      <Route path="/" exact component={Home} />
      <Route path="/single-cell" exact component={Singlecell} />
      <Route path="/genemarker" exact component={Genemarker} />
      <Route path="/insitumap" exact component={Insitumap} />
    </switch>
  </BrowserRouter>
  ,
  document.getElementById('root')
);

reportWebVitals();
