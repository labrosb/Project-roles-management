import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import Text from '../../../Main/Text';
import colors from '../../../../theme/colors';

const Content = styled.div`
  display: flex;
  align-items: center;
  padding-left: 12px;
  padding-right: 12px;
  border-radius: 8px;
  background-color: ${colors.special};
`;
// Exported for testing
export const RemoveIcon = styled(FontAwesomeIcon)`
  font-size: 14.5px;
  color: ${colors.secondary};
  margin-top: 2px;
  margin-left: 8px;
  cursor: pointer;
`;

function UserTag({ id, name, remove, index }) {
  const onRemoveClick = useCallback(() => (
    remove(id, index)
  ), [remove, id, index]);

  return (
    <Content>
      <Text
        size="0.85em"
        color={colors.secondary}
      >
        {name}
      </Text>
      <RemoveIcon
        icon={faTimesCircle}
        onClick={onRemoveClick}
      />
    </Content>
  );
}

export default UserTag;

UserTag.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  remove: PropTypes.func.isRequired
};
