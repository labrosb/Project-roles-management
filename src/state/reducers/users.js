import * as types from '../actions/types';

export default function users(state = null, action) {
  switch (action.type) {
    case types.SET_USER_LIST:
      return action.list;

    default:
      return state;
  }
}
