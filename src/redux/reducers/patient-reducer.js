import * as types from '../actions/action-types';

export default (state = {}, action) => {
  switch (action.type) {
    case types.SET_PATIENT:
      return Object.assign(state, action.patient);
    default:
      return state;
  }
};
