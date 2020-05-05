import * as types from '../actions/types';

// Can be restructured to reduce the tree levels:
// The project and role level can be merged to a projectName_roleName field

export default function projectTeams(state = null, action) {
  switch (action.type) {
    case types.SET_PROJECT_MAP:
      return action.list;

    case types.ADD_PROJECT_USER:
      const augmentedUsers = [...state[action.project][action.role]];
      const augmenterUsersMap = { ...state[action.project].AllUsers };

      augmentedUsers.push(action.user);
      augmenterUsersMap[action.user.id] = {
        name: action.user.name,
        role: action.role
      };

      return {
        ...state,
        [action.project]: {
          ...state[action.project],
          AllUsers: augmenterUsersMap,
          [action.role]: augmentedUsers
        }
      };

    case types.REMOVE_PROJECT_USER:
      const reducedUsers = [...state[action.project][action.role]];
      const reducedUsersMap = { ...state[action.project].AllUsers };

      reducedUsers.splice(action.roleIndex, 1);

      delete reducedUsersMap[action.userId];

      return {
        ...state,
        [action.project]: {
          ...state[action.project],
          AllUsers: reducedUsersMap,
          [action.role]: reducedUsers
        }
      };

    default:
      return state;
  }
}
