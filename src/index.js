import createHistory from 'history/createBrowserHistory'
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { Provider } from 'react-redux';
import configureStore from './redux/store/configure-store';

const history = createHistory();

const store = configureStore({
  history,
  patient: {
    address: {},
    medicalHistory: {},
  },
});

ReactDOM.render(
  <Provider store={store}>
    <App history={history}/>
  </Provider>,
  document.getElementById('root')
);
