import React from 'react';
import ReactDOM from 'react-dom';
import './static/css/styles.css';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxPromise from 'redux-promise';
import reducers from './reducers';

// Components
import Routes from './components/routes';

const createStoreWithMiddleware = applyMiddleware(reduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Routes />
  </Provider>,document.getElementById('root'));
