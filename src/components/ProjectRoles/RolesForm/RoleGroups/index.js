import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import UserList from '../UserList';
import AddButton from './AddUserButton';
import Text from '../../../Main/Text';

/* Component renders user selection fields for each role */

const RoleField = styled.div``;

const Label = styled(Text)`
  margin-left: 6px;
`;

const ListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

function RoleGroups({
  roles,
  projectUsers,
  project,
  removeUser,
  onAddClicked
}) {
  return roles.map(role => {
    const { name, id } = role;
    const label = name ? `${name}s` : null;
    return (
      <RoleField key={`role-${id}`}>
        <Label>{label}</Label>
        <ListContainer>
          <AddButton
            label="New"
            item={role}
            action={onAddClicked}
          />
          <UserList
            list={projectUsers[name]}
            {...{ role, project, removeUser }}
          />
        </ListContainer>
      </RoleField>
    );
  });
}

export default React.memo(RoleGroups);

RoleGroups.propTypes = {
  roles: PropTypes.array,
  projectUsers: PropTypes.object
};
