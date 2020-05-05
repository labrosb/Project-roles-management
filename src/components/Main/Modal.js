import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import Modal from 'react-modal';
import styled from 'styled-components';
import colors from '../../theme/colors';

Modal.setAppElement('body');

// Exported for testing
export const ExitButton = styled(FontAwesomeIcon)`
  position: absolute;
  right: -5px;
  top: -5px;
  font-size: 18.5px;
  color: ${colors.background};
  background-color: ${colors.formPrimary};
  border: 1px solid #CCCCCC;
  border-radius: 50%;
  cursor: pointer;
`;
// Exported for testing
export const Title = styled.p`
  font-size: 1em;
  color: ${colors.primary};
  margin: 0 4px 8px 4px;
`;

const defaultStyles = {
  content: {
    position: 'absolute',
    left: 0,
    right: 0,
    width: '320px',
    height: '114px',
    margin: 'auto',
    boxSizing: 'border-box',
    backgroundColor: 'rgba(255, 255, 255, 0.98)',
    overflow: 'visible'
  },
  overlay: {
    backgroundColor: 'transparent'
  }
};

function ModalComponent({ title, isOpen, close, children, styles }) {
  const modalStyles = {
    content: {
      ...defaultStyles.content,
      ...styles.content
    },
    overlay: {
      ...defaultStyles.overlay,
      ...styles.overlay
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      contentLabel="Select User"
      style={modalStyles}
      onRequestClose={close}
      shouldCloseOnOverlayClick
    >
      <ExitButton
        icon={faTimesCircle}
        onClick={close}
      />
      <Title>{title}</Title>
      {children}
    </Modal>
  );
}

export default ModalComponent;

ModalComponent.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  close: PropTypes.func,
  title: PropTypes.string,
  styles: PropTypes.object,
  children: PropTypes.any
};

ModalComponent.defaultProps = {
  styles: {}
};
