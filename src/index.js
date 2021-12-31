import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Product from './App';

ReactDOM.render(
  //change so that we call Product only once for any given product x, instead of sequentially
  //implement other recommendations from levvel interview (calling from index and other React conventions)
  <React.StrictMode>
    <a id='myLogo' href="./"><img id='logo' src="http://www.logo-designer.co/wp-content/uploads/2020/07/2020-trollbackcompany-logo-designs-branding-for-audio-tech-start-up-iris.png"/></a>
    <h2 id='header'>Catalog</h2>
    <App name="Product1" />
  </React.StrictMode>,
  document.getElementById('root')
);