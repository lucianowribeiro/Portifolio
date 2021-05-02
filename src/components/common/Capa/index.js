import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import lodash from 'lodash';
import breakpointsMedia from '../../../theme/utils/breakpointsMedia';
import Text from '../../foundation/Text';
import { WebPageContext } from '../../wrappers/WebPage';

const CapaStyle = styled.section`
  display: flex;
  width: 100%;
  margin-bottom: 30px;
  & > h1,
  & > h2 {
    margin: 2px;
    color: ${({ theme, mode }) => lodash.get(theme, `${mode}`).primary.text.color};
    text-shadow: 1px 0px 0px ${({ theme, mode }) => lodash.get(theme, `${mode}`).primary.main.color};
  }
  ${breakpointsMedia({
    xs: css`
      height: 40vh;
      flex-direction: column;
      justify-content: flex-end;
      align-items: center;
    `,
    md: css`
      height: 40vh;
      flex-direction: column;
      justify-content: center;
      & > h1,
      & > h2 {
        margin-left: 15%;
        align-self: flex-start;
      }
    `,
  })}
`;
CapaStyle.Img = styled.div`
  background-image: url("./images/CapaSIte.png");
  background-repeat: no-repeat; 
  width: 100%;
  height: 100%;
  z-index: 50;
  ${breakpointsMedia({
    xs: css`
      background-position: top;
      background-size: 90%; 
    `,
    md: css`
      background-position: right;
      background-size: 85%;  
      align-self: flex-end;
    `,
  })}
`;
export default function Capa() {
  const webPage = React.useContext(WebPageContext);
  return (
    <CapaStyle mode={webPage.themeMode}>
      <CapaStyle.Img />
      <Text tag="h1" mobile="titleXS" desktop="titleMD">
        Luciano Weber Ribeiro
      </Text>
      <Text tag="h2" mobile="subTitleXS" desktop="subTitleMD">
        Portifolio
      </Text>
    </CapaStyle>
  );
}
