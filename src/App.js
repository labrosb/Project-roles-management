import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './state/store';
import ProjectRolesPage from './components/ProjectRoles';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path={process.env.PUBLIC_URL}>
            <ProjectRolesPage />
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
