import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Header from './Main/Header';
import { H2 } from './Main/Labels';
import Text from './Main/Text';
import colors from '../theme/colors';

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 320px;
  margin: 8% auto auto auto;
  padding: 5px 10px 20px 10px;
  background-color: ${colors.secondary};
  border-radius: 12px;
`;

function Error({ header, message }) {
  return (
    <>
      <Header title={header} />
      <Content>
        <H2>Error!</H2>
        <Text>{message || 'An error occured!'}</Text>
      </Content>
    </>
  );
}

export default Error;

Error.propTypes = {
  header: PropTypes.string,
  message: PropTypes.string
};
