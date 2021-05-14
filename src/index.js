import React from 'react';
import ReactDOM from 'react-dom';
import { Provider} from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import setupSocket from './sockets';
import reducers from './reducers';
import handleNewMessage from './saga';
import username from './utils/name';


const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  reducers,
  applyMiddleware(sagaMiddleware)
);

const socket = setupSocket(store.dispatch, username);

sagaMiddleware.run(handleNewMessage, {socket, username});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      < App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
