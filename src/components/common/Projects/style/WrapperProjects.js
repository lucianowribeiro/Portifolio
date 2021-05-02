import styled, { css } from 'styled-components';
import lodash from 'lodash';
import breakpointsMedia from '../../../../theme/utils/breakpointsMedia';

const WrapperProjects = styled.section`
  display: flex;
  ${breakpointsMedia({
    xs: css`
      flex-direction: column;
      width: 80%;
      padding-bottom: 20px;
    `,
    md: css`
      justify-content: center;
    `,
  })}
`;
WrapperProjects.SectionTitle = styled.section`
  border-top: 1px solid rgba(94, 144, 163, 0.7);
  height: 6rem;
  & h2 {
    display: flex;
    color: ${({ theme, mode }) => lodash.get(theme, `${mode}`).primary.main.color};
    justify-content: center;
    align-items: center;
  }
`;
WrapperProjects.SectionCard = styled.section`
  display: flex;
  ${breakpointsMedia({
    xs: css`
      flex-direction: column;
    `,
    md: css`
      flex-direction: row;
      justify-content: center;
      flex-wrap: wrap;
    `,
  })}
`;

export default WrapperProjects;
