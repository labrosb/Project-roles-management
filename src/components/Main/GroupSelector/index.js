import React, { useRef, useState, useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Selector from './Selector';
import Options from './Options';

/* Inspired by react-select (react-select.com) which was originally
  planned to be used but throws a number of deprecated methods warnings */

const Container = styled.div`
  width: 100%;
`;

function GroupSelect({ placeholder, data, onSelect }) {
  const groupSelectRef = useRef();

  const [selectedOption, setSelectedOption] = useState();
  const [list, showList] = useState(false);

  const onOptionSelect = useCallback((label, value) => {
    setSelectedOption(label);
    onSelect(value);
    showList(false);
  }, [onSelect]);

  const handleClick = ({ target }) => {
    // If clicked in or out of component
    if (groupSelectRef.current.contains(target)) {
      showList(true);
    } else {
      showList(false);
    }
  };

  useEffect(() => {
    // Method to trigger click in/out of component
    document.addEventListener('mousedown', handleClick);
    return () => {
      document.removeEventListener('mousedown', handleClick);
    };
  }, []);

  return (
    <Container ref={groupSelectRef}>
      <Selector
        active={list ? 1 : 0}
        placeholder={placeholder}
        {...{ selectedOption }}
      />
      <Options
        show={list}
        onSelect={onOptionSelect}
        {...{ data }}
      />
    </Container>
  );
}

GroupSelect.propTypes = {
  placeholder: PropTypes.string,
  onSelect: PropTypes.func,
  data: PropTypes.array
};

GroupSelect.defaultProps = {
  onSelect: () => null
};

export default React.memo(GroupSelect);
