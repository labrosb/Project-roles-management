import Api from '../../utilities/devApi';
import * as types from './types';
import { setError, resetError } from './error';

export function setProjectUsersMap(list) {
  return {
    type: types.SET_PROJECT_MAP,
    list
  };
}

function addProjectUser(user, project, role) {
  return {
    type: types.ADD_PROJECT_USER,
    project: project.name,
    role: role.name,
    user
  };
}

function removeProjectUser(userId, projectName, roleName, roleIndex) {
  return {
    type: types.REMOVE_PROJECT_USER,
    project: projectName,
    role: roleName,
    roleIndex,
    userId
  };
}

export function addUser(user, project, role) {
  return dispatch => {
    // Resets error (only if an error has already taken place)
    dispatch(resetError('projects'));
    const { id: projectId } = project;
    // Body of a query to an existing server
    const body = { user, projectId };
    return Api.post('/projects/users/add', body)
      .then(res => {
        if (res.status === 'Success') {
          dispatch(addProjectUser(user, project, role));
        } else {
          dispatch(setError('projectRoles', 'Failed to add user.'));
        }
      })
      .catch(() => {
        // const errorMsg = err.response ? err.response.data : err.message;
        dispatch(setError('projectRoles', 'Failed to add user.'));
      });
  };
}

export function removeUser(userId, project, role, roleIndex) {
  return dispatch => {
    // Resets error (only if an error has already taken place)
    dispatch(resetError('projects'));
    const { id: projectId, name: projectName } = project;
    const { name: roleName } = role;
    // Body of a query to an existing server
    const body = { projectId, userId };
    return Api.delete('/projects/users/remove', body)
      .then(res => {
        if (res.status === 'Success') {
          dispatch(removeProjectUser(userId, projectName, roleName, roleIndex));
        } else {
          dispatch(setError('projectRoles', 'Failed to remove user.'));
        }
      })
      .catch(() => {
        // const errorMsg = err.response ? err.response.data : err.message;
        dispatch(setError('projectRoles', 'Failed to remove user.'));
      });
  };
}
