import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Provider from './provider/index'


ReactDOM.render(
  <Provider >
    <App/>
  </Provider>,
  document.getElementById('root')
);
var url = window.location.href;
var swLocation = '/context-sample/sw.js';
if ( navigator.serviceWorker ) {

  if ( url.includes('localhost') ) {
      swLocation = '/sw.js';
  }
  navigator.serviceWorker.register( swLocation );
}


