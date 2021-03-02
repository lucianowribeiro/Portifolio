import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import breakpointsMedia from '../../../theme/utils/breakpointsMedia';

const Card = styled.a`
  display: flex;
  flex-direction: column;
  text-decoration: none;
  ${breakpointsMedia({
    xs: css`
      justify-content: initial;
    `,
    md: css`
      flex: 1 1 150px;
      justify-content: center;
      align-items: center;
    `,
  })}
  padding: 0 30px;
  cursor: pointer;
  &:hover{
    box-shadow: 3px 2px 5px ${({ theme }) => theme.colors.primary.main.color};
    border-radius: ${({ theme }) => theme.borderRadius.card};
    transition: ${({ theme }) => theme.transition};
  }
`;
Card.Image = styled.img`
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
Card.Title = styled.div`
  & h3 {
    text-align: center;
    color: ${({ theme }) => theme.colors.primary.main.contrast};
  }
`;
Card.Text = styled.div`
  & p {
    color: ${({ theme }) => theme.colors.primary.text.color};
    ${breakpointsMedia({
    xs: css`
        text-align: justify;
      `,
    md: css`
        text-align: center;
      `,
  })}
  }
`;
export default Card;

Card.propTypes = {
  children: PropTypes.node.isRequired,
};
