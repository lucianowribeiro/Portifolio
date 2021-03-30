import styled from 'styled-components';
import propToStyle from '../../../theme/utils/propToStyle';

const Box = styled.div`
  ${propToStyle('display')}
  ${propToStyle('flex')}
  ${propToStyle('flexDirection')}
  ${propToStyle('justifyContent')}
  ${propToStyle('marginBottom')}
  ${propToStyle('alignItems')}
  ${propToStyle('backgroundColor')}
  ${propToStyle('boxShadow')};
  ${propToStyle('width')}
  ${propToStyle('height')}
  ${propToStyle('borderRadius')}
  ${propToStyle('listStyle')}
  ${propToStyle('marginBottom')}
  ${propToStyle('paddingLeft')}
  ${propToStyle('textAlign')}
`;
export default Box;
