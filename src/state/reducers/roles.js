import * as types from '../actions/types';

export default function roles(state = null, action) {
  switch (action.type) {
    case types.SET_ROLE_LIST:
      return action.list;

    default:
      return state;
  }
}
