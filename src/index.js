import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Display from './App';

ReactDOM.render(
  <React.StrictMode>
    <h1 id='header'>Top Posts by Author</h1>
    <Display name="Jessica" />
    <Display name="Alejandro"/>
    <Display name="Eric"/>
    <Display name="Vanessa"/>
  </React.StrictMode>,
  document.getElementById('root')
);

