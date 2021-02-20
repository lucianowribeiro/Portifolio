import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`;

export default Container;

Container.propTypes = {
  children: PropTypes.node,
};
