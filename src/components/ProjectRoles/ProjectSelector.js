import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Text from '../Main/Text';
import { H2 } from '../Main/Labels';
import colors from '../../theme/colors';
import mediaQueries from '../../theme/layout';

const Title = styled(H2)`
  @media (max-width: ${mediaQueries.p2}) {
    display: none;
  };
`;

const Selector = styled.div`
  position: absolute;
  right: 0;
  margin-top: 50px;
  overflow: auto;
  @media (max-width: ${mediaQueries.p1}) {
    position: static;
  };
  @media (max-width: 700px) {
    display: flex;
    margin: 24px auto 0 auto;
    max-width: 100%;
  };
`;
// Exported for testing
export const Choice = styled.div`
  display: flex;
  align-items: center;
  white-space: nowrap;
  margin-bottom: 12px;
  padding: 0 22px;
  border: 1px solid ${colors.special};
  background-color: ${colors.special};
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  cursor: pointer;
  &::before {
    content: '▶';
    color: ${colors.background};
    font-size: 12px;
    margin-right: 14px;
  };
  &:hover {
    background-color: ${colors.primary};
  };
  @media (max-width: ${mediaQueries.p2}) {
    border-radius: 10px;
    margin: 0 4px;
    &::before { content: ''};
`;

function ProjectSelector({ projects, onSelected }) {
  const boobleUpProject = project => {
    onSelected(project);
  };
  const renderChoices = () => (
    projects.map(project => (
      <Choice
        key={`choice-${project.id}`}
        onClick={() => boobleUpProject(project)}
      >
        <Text color={colors.background}>
          {project.name}
        </Text>
      </Choice>
    ))
  );

  return (
    <Selector>
      <Title>Projects</Title>
      {renderChoices()}
    </Selector>
  );
}

export default React.memo(ProjectSelector);

ProjectSelector.propTypes = {
  projects: PropTypes.array.isRequired,
  onSelected: PropTypes.func.isRequired
};
