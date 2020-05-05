import styled from 'styled-components';
import colors from '../../theme/colors';
import font from '../../theme/fonts';

function getColor(color) {
  return colors[color] || color;
}

export const H1 = styled.h1`
  font-family: ${font.fontDefault};
  font-size: ${font.fontSizeBig};
  font-weight: 500;
  text-transform: uppercase;
  color: ${props => (props.color ? getColor(props.color) : colors.text)};
  text-align: ${props => props.align || 'center'};
`;

export const H2 = styled.h2`
  font-family: ${font.fontDefault};
  font-size: ${font.fontSizeMed};
  font-weight: 400;
  text-transform: uppercase;
  color: ${props => (props.color ? getColor(props.color) : colors.text)};
  text-align: ${props => props.align || 'center'};
`;
