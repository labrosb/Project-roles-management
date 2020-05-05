import * as types from './types';

export function setError(errorType, errorMsg) {
  return {
    type: types.SET_ERROR,
    error: errorMsg,
    errorType
  };
}

export function resetError(errorType) {
  return (dispatch, getState) => {
    // Check if an error of the given type exists
    const error = getState().error[errorType];
    // if it exists, reset...
    if (error) {
      dispatch(setError(errorType, null));
    }
  };
}
