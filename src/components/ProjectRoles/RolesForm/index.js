import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import UserSelector from './UserSelector';
import RoleGroups from './RoleGroups';
import { H2 } from '../../Main/Labels';
import DynamicError from '../../Main/DynamicError';
import colors from '../../../theme/colors';
import mediaQueries from '../../../theme/layout';

const Content = styled.div`
  max-width: 420px;
  width: 100%;
  margin: 50px auto;
  padding: 14px;
  box-sizing: border-box;
  background-color: ${colors.secondary};
  border-radius: 12px;
  @media (max-width: ${mediaQueries.p2}) {
    margin-top: ${props => (props.expanded ? '24px' : '60px')};
    max-width: 96%;
  };
`;

const Title = styled(H2)`
  margin: 8px;
`;

const AltContent = styled(Content)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 320px;
  padding: 20px;
  margin-top: 120px;
`;

function RolesForm({
  project,
  projectUsers,
  users,
  addUser,
  roles,
  removeUser,
  error
}) {
  const [userSelector, showUserSelector] = useState(false);
  const [roleForUser, setRoleForUser] = useState({});

  const closeUserSelector = useCallback(() => {
    showUserSelector(false);
  }, []);

  const onAddClicked = useCallback(role => {
    setRoleForUser(role);
    showUserSelector(true);
  }, []);

  const onUserSelected = useCallback(user => {
    showUserSelector(false);
    addUser(user, project, roleForUser);
  }, [addUser, project, roleForUser]);

  if (projectUsers) {
    const title = `Select ${roleForUser.name}`;
    return (
      <Content expanded={!!project.name}>
        <UserSelector
          isOpen={userSelector}
          onClose={closeUserSelector}
          onSelect={onUserSelected}
          {...{ title, projectUsers, users }}
        />
        <Title color={colors.textDark}>
          {project.name}
        </Title>
        <DynamicError show={!!error} message={error} />
        <RoleGroups
          {...{ projectUsers, project, onAddClicked, roles, removeUser }}
        />
      </Content>
    );
  }
  return (
    <AltContent>
      <H2>Select a project . . .</H2>
    </AltContent>
  );
}

export default RolesForm;

RolesForm.propTypes = {
  title: PropTypes.string,
  roles: PropTypes.array,
  users: PropTypes.array,
  project: PropTypes.object,
  projectUsers: PropTypes.object,
  addUser: PropTypes.func,
  removeUser: PropTypes.func,
  error: PropTypes.string
};
