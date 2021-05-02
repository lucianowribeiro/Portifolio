import styled, { css } from 'styled-components';
import lodash from 'lodash';
import breakpointsMedia from '../../../theme/utils/breakpointsMedia';
import propToStyle from '../../../theme/utils/propToStyle';
import Text from '../../foundation/Text';

const Card = styled.section`
  display: flex;
  flex-direction: column;
  text-transform: capitalize;
  text-decoration: none;
  ${breakpointsMedia({
    xs: css`
      justify-content: initial;
    `,
    md: css`
      flex: 1 1 30%;
      justify-content: center;
      align-items: center;
    `,
  })}
  padding: 0 30px;
  cursor: pointer;
  &:hover {
    box-shadow: 3px 2px 5px ${({ theme, mode }) => lodash.get(theme, `${mode}`).primary.main.color};
    border-radius: ${({ theme }) => theme.borderRadius.card};
    transition: ${({ theme }) => theme.transition};
  }
`;
Card.Image = styled.img`
  ${propToStyle('order')};
  border-radius: ${({ theme }) => theme.borderRadius.card};
  ${breakpointsMedia({
    xs: css`
      width: 100%;
    `,
    md: css`
      width: 80%;
    `,
  })}
`;
Card.Title = styled(Text)`
  text-align: center;
  color: ${({ theme, mode }) => lodash.get(theme, `${mode}`).primary.main.contrast};
`;
Card.Text = styled(Text)`
  ${propToStyle('width')};
  color: ${({ theme, mode }) => lodash.get(theme, `${mode}`).primary.text.color};
  ${breakpointsMedia({
    xs: css`
      text-align: justify;
    `,
    md: css`
      text-align: center;
    `,
  })}
`;
export default Card;
