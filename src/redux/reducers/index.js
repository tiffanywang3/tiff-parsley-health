import { routerReducer } from 'react-router-redux'
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import patient from './patient-reducer.js';

const rootReducer = combineReducers({
  form: formReducer,
  patient,
  router: routerReducer,
});

export default rootReducer;
