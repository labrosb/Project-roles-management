// Export for testing
export const responseData = {
  users: [
    { id: 1, name: 'John Steve' },
    { id: 2, name: 'Daniel Santos' },
    { id: 3, name: 'Maria Delort' }
  ],
  roles: [
    { id: 1, name: 'Admin' },
    { id: 2, name: 'Editor' },
    { id: 3, name: 'Viewer' }
  ],
  projects: [
    { id: 1, name: 'Analytics Platform' },
    { id: 2, name: 'Marketplace' },
    { id: 3, name: 'Sport Games App' }
  ],
  // Retrieving also the map as we also need to retrieve users assigned to projects
  projectUsersMap: {
    'Analytics Platform': {
      AllUsers: {},
      Admin: [],
      Editor: [],
      Viewer: []
    },
    Marketplace: {
      AllUsers: {},
      Admin: [],
      Editor: [],
      Viewer: []
    },
    'Sport Games App': {
      AllUsers: {},
      Admin: [],
      Editor: [],
      Viewer: []
    }
  }
};

const responses = {
  '/projects/getProjectLists': responseData,
  '/projects/users/add': { status: 'Success' },
  '/projects/users/remove': { status: 'Success' }
};

const API = {
  get: link => Promise.resolve(responses[link]),
  post: link => Promise.resolve(responses[link]),
  delete: link => Promise.resolve(responses[link])
};

export default API;
