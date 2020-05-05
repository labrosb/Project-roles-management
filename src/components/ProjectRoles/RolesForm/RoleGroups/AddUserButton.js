import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import Text from '../../../Main/Text';
import colors from '../../../../theme/colors';

const Button = styled.div`
  display: flex;
  align-items: center;
  padding: 0 12px;
  margin: 2.5px;
  border-radius: 8px;
  background-color: ${colors.special};
  cursor: pointer;
  &:hover {
    background-color: ${colors.primary};
  };
`;

const ButtonIcon = styled(FontAwesomeIcon)`
  font-size: 14.5px;
  color: ${colors.secondary};
  margin-top: 2px;
  margin-left: 8px;
`;

function AddButton({ label, action, item }) {
  const onButtonClick = useCallback(() => {
    action(item);
  }, [action, item]);

  return (
    <Button onClick={onButtonClick}>
      <Text
        size="0.85em"
        color={colors.secondary}
      >
        {label}
      </Text>
      <ButtonIcon icon={faPlusCircle} />
    </Button>
  );
}

export default AddButton;

AddButton.propTypes = {
  label: PropTypes.string.isRequired,
  item: PropTypes.any.isRequired,
  action: PropTypes.func.isRequired
};
