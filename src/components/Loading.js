import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Header from './Main/Header';
import loadingSpinner from '../assets/icons/loading.svg';

export const AltContent = styled.div`
  height: 58vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SpinnerIcon = styled.img`
  width: 80px;
`;

function LoadingContent({ header }) {
  return (
    <>
      <Header title={header} />
      <AltContent>
        <SpinnerIcon src={loadingSpinner} alt="Loading..." />
      </AltContent>
    </>
  );
}

export default LoadingContent;

LoadingContent.propTypes = {
  header: PropTypes.string
};
