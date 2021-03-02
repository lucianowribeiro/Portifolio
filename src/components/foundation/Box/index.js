import styled from 'styled-components';
import propToStyle from '../../../theme/utils/propToStyle';

const Box = styled.div`
  ${propToStyle('display')}
  ${propToStyle('flexDirection')}
  ${propToStyle('justifyContent')}
  ${propToStyle('alignItems')}
  ${propToStyle('backgroundColor')}
  ${propToStyle('boxShadow')};
  ${propToStyle('width')}
  ${propToStyle('height')}
  ${propToStyle('borderRadius')}
  
  
`;
export default Box;
