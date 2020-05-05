import * as types from '../actions/types';

export default function projects(state = null, action) {
  switch (action.type) {
    case types.SET_PROJECT_LIST:
      return action.list;

    default:
      return state;
  }
}
