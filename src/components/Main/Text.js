import styled from 'styled-components';
import colors from '../../theme/colors';
import font from '../../theme/fonts';

function getSize(size) {
  if (size === 'small') return font.fontSizeSmall;
  if (size === 'big') return font.fontSizeBig;
  return size;
}

function getColor(color) {
  return colors[color] || color;
}

const Text = styled.p`
  font-family: ${font.fontDefault};
  font-size: ${props => (props.size ? getSize(props.size) : font.fontSize)};
  color: ${props => (props.color ? getColor(props.color) : colors.text)};
  text-align: ${props => props.align || 'left'};
`;

export default Text;
