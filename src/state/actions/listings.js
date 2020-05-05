import Api from '../../utilities/api';
import * as types from './types';
import { setProjectUsersMap } from './projectUsers';
import { setError, resetError } from './error';

const errors = {
  noProjects: 'You haven\x27t created any projects.',
  noRoles: 'You haven\x27t set any roles.',
  noUsers: 'No users registered.',
  noProjectUsersMap: 'Error getting existing projects.'
};

function setProjects(list) {
  return {
    type: types.SET_PROJECT_LIST,
    list
  };
}

function setRoles(list) {
  return {
    type: types.SET_ROLE_LIST,
    list
  };
}

function setUsers(list) {
  return {
    type: types.SET_USER_LIST,
    list
  };
}

export function getProjectLists() {
  return (dispatch, getState) => {
    // Checks if map already exists on state and if it's identical to the one retrieved
    // Remove this function if the project consists of a server returning updated data
    const mapExists = newMap => {
      const oldMap = getState().projectUsersMap;
      const oldMapArr = Object.keys(oldMap);
      const newMapArr = Object.keys(newMap);
      if (newMapArr.length === oldMapArr.length) {
        // Checks if map object keys are identical
        const index = newMapArr.findIndex(project => !oldMap[project]);
        if (index === -1) {
          return true;
        }
        return false;
      }
      return false;
    };
    // Resets error (only if an error has already taken place)
    dispatch(resetError('lists'));

    return Api.get('/projects/getProjectLists')
      .then(lists => {
        const { projects, roles, users, projectUsersMap } = lists;

        if (projects && projects.length) dispatch(setProjects(projects));
        else dispatch(setError('lists', errors.noProjects));

        if (roles && roles.length) dispatch(setRoles(roles));
        else dispatch(setError('lists', errors.noRoles));

        if (users && users.length) dispatch(setUsers(users));
        else dispatch(setError('lists', errors.noUsers));

        // Remove this condition if the project consists of a server returning updated data
        const isNewMap = !mapExists(projectUsersMap);
        if (isNewMap) {
          if (projectUsersMap) {
            dispatch(setProjectUsersMap(projectUsersMap));
          } else {
            dispatch(setError('lists', errors.noProjectUsersMap));
          }
        }
      })
      .catch(() => {
        // const errorMsg = err.response ? err.response.data : err.message;
        dispatch(setError('lists', 'Network Error'));
      });
  };
}
