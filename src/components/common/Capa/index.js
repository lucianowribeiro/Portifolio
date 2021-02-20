import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import breakpointsMedia from '../../../theme/utils/breakpointsMedia';
import Text from '../../foundation/Text';

const CapaStyle = styled.section`
  display: flex;
  width: 100%;
  margin-bottom: 30px;
  background-image: url("./images/4401280.jpg");
  background-repeat: no-repeat;
  & > h1,
  & > h2 {
    margin: 2px;
    color: #2b3d44;
    text-shadow: 1px 0px 0px white, -1px 0px 0px white, 0px 1px 0px white,
      0px -1px 0px white;
  }
  ${breakpointsMedia({
    xs: css`
      height: 60vh;
      flex-direction: column;
      justify-content: flex-end;
      align-items: center;
      background-position: top;
      background-size: 90%;
    `,
    md: css`
      height: 50vh;
      justify-content: center;
      align-items: flex-start;
      background-position: right;
      background-size: 65%;
      & > h1,
      & > h2 {
        margin-left: 15%;
      }
    `,
  })}
`;
export default function Capa() {
  return (
    <CapaStyle>
      <Text as="h1" pattern="titleXS" variant="titleMD">
        Luciano Weber Ribeiro
      </Text>
      <Text as="h2" pattern="subTitleXS" variant="subTitleMD">
        Portifolio
      </Text>
    </CapaStyle>
  );
}

CapaStyle.propTypes = {
  children: PropTypes.node,
};
