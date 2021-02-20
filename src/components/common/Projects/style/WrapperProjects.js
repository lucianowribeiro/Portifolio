import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import breakpointsMedia from '../../../../theme/utils/breakpointsMedia';

const WrapperProjects = styled.div`
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
    border-top: 1px solid rgba(94, 144, 163,.7);
    height: 6rem;
    & h2{
        display: flex;
        color: ${({ theme }) => theme.colors.primary.main.color};
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
        `,
  })}
`;

export default WrapperProjects;

WrapperProjects.propTypes = {
  children: PropTypes.node,
};
WrapperProjects.SectionTitle.propTypes = {
  children: PropTypes.node,
};
WrapperProjects.SectionCard.propTypes = {
  children: PropTypes.node,
};
