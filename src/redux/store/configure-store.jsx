import { routerMiddleware } from 'react-router-redux';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from '../reducers';

export default (initialState) => {
  const middleware = routerMiddleware(initialState.history);
  return createStore(
    rootReducer,
    initialState,
    composeWithDevTools(
      applyMiddleware(middleware),
    ));
};
