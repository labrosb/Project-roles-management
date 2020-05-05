import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ProjectSelector from './ProjectSelector';
import ProjectRolesForm from './RolesForm';
import Header from '../Main/Header';
import Loading from '../Loading';
import Error from '../Error';
import mediaQueries from '../../theme/layout';
import ReduxConnector from '../../state/connector';

const Content = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  @media (max-width: ${mediaQueries.p2}) {
    flex-direction: column;
  };
`;

const header = 'Project Roles';

function ProjectRoles({
  getProjectLists,
  projectUsersMap,
  projects,
  error,
  ...props
}) {
  const [project, setProject] = useState({});
  const [listsReceived, setListsReceived] = useState(false);

  useEffect(() => {
    getProjectLists()
      .then(() => setListsReceived(true));
  }, [getProjectLists]);

  if (error.lists) {
    return (<Error message={error.lists} {...{ header }} />);
  }

  if (!listsReceived) {
    return (<Loading {...{ header }} />);
  }

  return (
    <>
      <Header title={header} />
      <Content>
        <ProjectSelector
          onSelected={setProject}
          {...{ projects }}
        />
        <ProjectRolesForm
          projectUsers={projectUsersMap[project.name]}
          error={error.projectRoles}
          {...{ project }}
          {...props}
        />
      </Content>
    </>
  );
}

export default ReduxConnector(ProjectRoles);

ProjectRoles.propTypes = {
  getProjectLists: PropTypes.func,
  projectUsersMap: PropTypes.object,
  error: PropTypes.object,
  projects: PropTypes.array
};
