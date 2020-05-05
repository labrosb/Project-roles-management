import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import colors from '../../../theme/colors';
import fonts from '../../../theme/fonts';

export const Select = styled.div`
  position: relative;
  width: 100%;
  padding: 6px 10px;
  box-sizing: border-box;
  border: 1px solid ${colors.fade};
  border-radius: 4px;
  box-shadow: ${props => (
    props.active ? '0 0 1px 1px rgba(75, 93, 115, 0.4)' : 'none'
  )};
  cursor: pointer;
`;

export const Label = styled.span`
  font-family: ${fonts.fontSelector};
  font-size: 16px;
  color: ${props => (props.selected ? colors.text : colors.formPrimary)};
`;

const IconContainer = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
`;

const Icon = styled(FontAwesomeIcon)`
  font-size: 14px;
  color: ${props => (props.active ? colors.special : colors.fade)};
  margin: auto;
  padding: 4px 12px;
  border-left: 1px solid ${colors.fade};
`;

function Selector({ active, selectedOption, placeHolder }) {
  return (
    <Select {...{ active }}>
      <Label selected={!!selectedOption}>
        { selectedOption || placeHolder}
      </Label>
      <IconContainer>
        <Icon
          icon={faChevronDown}
          {...{ active }}
        />
      </IconContainer>
    </Select>
  );
}

Selector.propTypes = {
  active: PropTypes.number, // boolean
  selectedOption: PropTypes.string,
  placeHolder: PropTypes.string
};

Selector.defaultProps = {
  placeHolder: 'Select...'
};

export default React.memo(Selector);
