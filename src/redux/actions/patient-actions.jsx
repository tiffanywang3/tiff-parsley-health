import * as types from './action-types';

export const setPatient = (patient) => {
  return {
    type: types.SET_PATIENT,
    patient,
  };
}
