import React, { useCallback } from 'react';
import styled from 'styled-components';
import UserTag from './UserTag';

/* Component renders the tags list */

const Item = styled.div`
  margin: 2.5px;
`;

function UserList({ list, removeUser, project, role }) {
  const removeItem = useCallback((id, index) => {
    // Redux: Id is used to remove user from the users map, by key
    // and index to delete user from the roles array avoiding loops
    removeUser(id, project, role, index);
  }, [removeUser, project, role]);

  if (list) {
    return list.map((item, index) => (
      <Item key={`user-${item.id}`}>
        <UserTag
          id={item.id}
          name={item.name}
          remove={removeItem}
          {...{ index }}
        />
      </Item>
    ));
  }

  return null;
}

export default React.memo(UserList);
