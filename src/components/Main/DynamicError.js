import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import Text from './Text';
import colors from '../../theme/colors';

const Content = styled.div`
  min-width: 200px;
  width: 30%;
  max-width: 320;
  margin: 6px auto;
  padding: 2px;
  border-radius: 12px;
  background-color: ${colors.error};
  opacity: 0.9;
`;

const ErrorIcon = styled(FontAwesomeIcon)`
  font-size: 14.5px;
  margin-right: 6px;
  color: ${colors.primary};
`;

function DynamicMessage({ show, message }) {
  if (show) {
    return (
      <Content>
        <Text
          color={colors.primary}
          align="center"
        >
          <ErrorIcon icon={faTimesCircle} />
          {message}
        </Text>
      </Content>
    );
  }
  return null;
}

DynamicMessage.propTypes = {
  show: PropTypes.bool,
  message: PropTypes.string
};

export default DynamicMessage;
