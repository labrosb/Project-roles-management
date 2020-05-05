import React, { useMemo, useCallback } from 'react';
import PropTypes from 'prop-types';
import GroupSelector from '../../Main/GroupSelector';
import Modal from '../../Main/Modal';

/* Component renders a modal with a custom select */

function UserSelector({
  title,
  isOpen,
  onClose,
  onSelect,
  projectUsers,
  users
}) {
  const selectionData = useMemo(() => {
    const unavailableOptions = [];
    const availableOptions = [];

    users.forEach(user => {
      const listUser = projectUsers.AllUsers[user.id];

      if (listUser) {
        unavailableOptions.push({
          value: user,
          label: `${user.name} (${listUser.role})`,
          disabled: true
        });
      } else {
        availableOptions.push({ value: user, label: user.name });
      }
    });

    if (availableOptions.length === 0) {
      return [{
        label: 'Unavailable',
        options: unavailableOptions
      }];
    }
    if (unavailableOptions.length > 0) {
      return [{
        label: 'Available',
        options: availableOptions
      }, {
        label: 'Unavailable',
        options: unavailableOptions
      }];
    }
    return [{ options: availableOptions }];
  }, [projectUsers, users]);

  const onUserSelect = useCallback(user => {
    onSelect(user);
  }, [onSelect]);

  return (
    <Modal
      title={title}
      isOpen={isOpen}
      close={onClose}
    >
      <GroupSelector
        data={selectionData}
        onSelect={onUserSelect}
      />
    </Modal>
  );
}

export default React.memo(UserSelector);

UserSelector.propTypes = {
  title: PropTypes.string,
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  onSelect: PropTypes.func,
  projectUsers: PropTypes.object,
  users: PropTypes.array
};

UserSelector.defaultProps = {
  users: []
};
