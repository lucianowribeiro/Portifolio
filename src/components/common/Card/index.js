import styled, { css } from "styled-components";
import Proptypes from "prop-types";
import breakpointsMedia from "../../../theme/utils/breakpointsMedia";

const Card = styled.article`
  display: flex;
  flex-direction: column;
  ${breakpointsMedia({
    xs: css`
      justify-content: initial;
    `,
    md: css`
      justify-content: center;
      align-items: center;
    `,
  })}
  padding: 0 30px;
  border: 4px solid ${({ theme }) => theme.colors.borders.main.color};
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
  children: Proptypes.node.isRequired,
};
