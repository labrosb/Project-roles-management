import * as types from '../actions/types';

export default function error(state = null, action) {
  switch (action.type) {
    case types.SET_ERROR:
      return { ...state, [action.errorType]: action.error };

    default:
      return state;
  }
}
