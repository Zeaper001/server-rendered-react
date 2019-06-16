import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import App from './App';
//import StaticContext from "./StaticContext";
import '../assets/style.css';
//import getData from "../common/getData";

/*const path = window.document.location.pathname;
const promises = getData(path);
const data = {};

Promise.all(promises).then(responses => {
    responses.forEach(r => {
        if (r) Object.assign(data, r);
    });*/

    ReactDOM.hydrate(
        <BrowserRouter>
          <App />
        </BrowserRouter>
    , document.getElementById('root'));

//});

if (module.hot) {
  module.hot.accept();
}
