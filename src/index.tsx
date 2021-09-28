import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Chat from './Chat/Chat';
import Login from './Login/Login';
import reportWebVitals from './reportWebVitals';
const {BrowserRouter, Switch, Route, Link}  = require("react-router-dom");
ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter>
          {/*<h1>Bearxsh</h1>*/}
          <Switch>
              <Route path="/login">
                  <Login/>
              </Route>
              <Route path="/chat">
                  <Chat/>
              </Route>
              <Route>
                  <span>page not found!</span>
              </Route>
          </Switch>
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
