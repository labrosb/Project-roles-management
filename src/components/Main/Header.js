import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { H1 } from './Labels';
import colors from '../../theme/colors';

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 92px;
  color: ${colors.primaryContrast};
  background-color: ${colors.primary};
`;

function Header({ title }) {
  return (
    <HeaderContainer>
      <H1 color={colors.primaryContrast}>
        {title}
      </H1>
    </HeaderContainer>
  );
}

Header.propTypes = {
  title: PropTypes.string
};

export default Header;
