import { createStore, compose, applyMiddleware } from 'redux';
import { persistCombineReducers, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';
import reducers from './reducers';

const config = {
  key: 'root',
  whitelist: ['projectUsersMap'],
  storage
};

const reducer = persistCombineReducers(config, reducers);

const initialState = {
  users: [],
  roles: [],
  projects: [],
  projectUsersMap: {},
  error: {
    lists: null,
    projectRoles: null
  }
};

const rootReducer = (state, action) => reducer(state, action);

const middlewares = [thunk];

// Use redux-logger only on development mode
if (process.env.NODE_ENV === 'development') {
  const { logger } = require('redux-logger'); // eslint-disable-line

  middlewares.push(logger);
}

// Configure a store that uses the defined middlewares
function configureStore() {
  const enhancer = compose(
    applyMiddleware(...middlewares)
  );

  return createStore(rootReducer, initialState, enhancer);
}

const store = configureStore();
const persistor = persistStore(store);

export { store, persistor };
