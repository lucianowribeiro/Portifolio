import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import React from 'react';
import lodash from 'lodash';
import breakpointsMedia from '../../../theme/utils/breakpointsMedia';
import Link from '../../foundation/Link';
import { WebPageContext } from '../../wrappers/WebPage';

const FooterStyle = styled.footer`
  display: flex;
  justify-content: center;
  background-color: ${({ theme, mode }) => lodash.get(theme, `${mode}`).secondary.main.color};
  ${breakpointsMedia({
    xs: css`
      height: 10vh;
    `,
    md: css`
      height: 8vh;
    `,
  })}
  width: 100%;
  border: 2px solid ${({ theme, mode }) => lodash.get(theme, `${mode}`).borders.main.color};
`;
FooterStyle.Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 30%;
  & a {
    margin-left: 12px;
    height: 60%;
  }
  & a:hover {
    transform: scale(1.2);
    transition: transform ${({ theme }) => theme.transition};
  }
  & a img {
    height: 100%;
  }
`;

export default function Footer() {
  const webPage = React.useContext(WebPageContext);
  return (
    <FooterStyle mode={webPage.themeMode}>
      <FooterStyle.Icon>
        <Link
          mode={webPage.themeMode}
          href="https://www.linkedin.com/in/lucianowribeiro/"
          rel="noreferrer"
          target="_blank"
        >
          <img src="/images/linkedin.svg" alt="linkedin" />
        </Link>
        <Link
          mode={webPage.themeMode}
          href="https://github.com/lucianowribeiro/"
          rel="noreferrer"
          target="_blank"
        >
          <img src="/images/github.svg" alt="github" />
        </Link>
        <Link
          mode={webPage.themeMode}
          href="/documents/CV_front.pdf"
          rel="noreferrer"
          target="_blank"
        >
          <img src="/images/cv.svg" alt="cv" />
        </Link>
      </FooterStyle.Icon>
    </FooterStyle>
  );
}
FooterStyle.propTypes = {
  children: PropTypes.node,
};
FooterStyle.Icon.propTypes = {
  children: PropTypes.node,
};
