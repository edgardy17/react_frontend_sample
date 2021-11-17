import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Display from './App';

ReactDOM.render(
  <React.StrictMode>
    <a id='myLogo' href="./"><h1 id='logo'>Views From The Wing</h1></a>
    <h2 id='header'>Top Posts by Author</h2>
    <Display name="Jessica" />
    <Display name="Alejandro"/>
    <Display name="Eric"/>
    <Display name="Vanessa"/>
  </React.StrictMode>,
  document.getElementById('root')
);

