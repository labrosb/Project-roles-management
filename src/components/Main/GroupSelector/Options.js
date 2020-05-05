import React, { useMemo, useCallback } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import colors from '../../../theme/colors';

const Options = styled.div`
  margin-top: 8px;
  padding: 6px 0;
  background-color: ${colors.background};
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1), 0 4px 11px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  z-index: -1;
`;

export const OptionsGroup = styled.div``;

export const Option = styled.div`
  padding: 6px 10px;
  color: ${props => (props.disabled ? colors.fade : colors.text)};
  cursor: ${props => (props.disabled ? 'default' : 'pointer')};
  &:hover {
    background-color: ${props => (props.disabled ? 'none' : '#d9e5f5')};
  };
`;

export const Label = styled.div`
  font-size: 12px;
  font-weight: 500;
  text-transform: uppercase;
  color: ${colors.formSecondary};
  padding: 6px 10px;
  cursor: default;
`;

const renderLabel = label => (
  <Label disabled>{label}</Label>
);

function OptionsList({ data, onSelect, show }) {
  const renderOptionList = useCallback(options => {
    const onOptionSelect = ({ label, value }) => {
      onSelect(label, value);
    };

    return options.map(option => (
      <Option
        key={`option-${option.label}`}
        disabled={option.disabled}
        onClick={() => onOptionSelect(option)}
      >
        {option.label}
      </Option>
    ));
  }, [onSelect]);

  const renderGroups = useMemo(() => (
    data.map(type => {
      const { options, label } = type;
      return (
        <OptionsGroup key={`group-${label}`}>
          {renderLabel(label)}
          {renderOptionList(options)}
        </OptionsGroup>
      );
    })
  ), [data, renderOptionList]);

  if (show) {
    return (
      <Options>
        {renderGroups}
      </Options>
    );
  }
  return null;
}

OptionsList.propTypes = {
  show: PropTypes.bool,
  data: PropTypes.array,
  onSelect: PropTypes.func
};

OptionsList.defaultProps = {
  data: [],
  onSelect: () => null
};

export default OptionsList;
