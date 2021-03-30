/* eslint-disable import/no-cycle */
import React from 'react';
import styled, { css } from 'styled-components';
import breakpointsMedia from '../../../theme/utils/breakpointsMedia';
import Button from '../../foundation/Button';
import Link from '../../foundation/Link';
import Text from '../../foundation/Text';
import { WebPageContext } from '../../wrappers/WebPage';

const links = [
  {
    text: 'About',
    url: '/about',
  },
];
const HeaderWrapper = styled.header`
  display: flex;
  height: 10vh;
  ${breakpointsMedia({
    xs: css`
      justify-content: center;
    `,
    md: css`
      justify-content: space-around;
    `,
  })}
  & a {
    height: 70%;
    ${breakpointsMedia({
    xs: css`
      width: 30%;
    `,
  })}
  }
  align-items: center;
  width: 100%;
`;
HeaderWrapper.Logo = styled.img`
  border-radius: ${({ theme }) => theme.borderRadius.logo};
  height: 100%;
  cursor: pointer;
`;
HeaderWrapper.Menu = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  ${breakpointsMedia({
    xs: css`
      width: 40%;
    `,
    md: css`
       width: 28%;
    `,
  })}
  & button {
    padding: 0.8rem 0;
  }
  & ul {
    display: flex;
    padding-inline-start: 0;
  }
  & li {
    justify-content: center;
    list-style: none;
    margin: 8px;
  }
`;

export default function Header() {
  const webPage = React.useContext(WebPageContext);
  return (
    <HeaderWrapper>
      <Link href="/">
        <HeaderWrapper.Logo src="/favicon.svg" alt="luciano w ribeiro logo" />
      </Link>
      <HeaderWrapper.Menu>
        <ul>
          {links.map((link) => (
            <li key={link.url}>
              <Text href={link.url} mobile="menuXS" desktop="menuMD">
                {link.text}
              </Text>
            </li>
          ))}
        </ul>
        <Button type="submit" onClick={() => webPage.toogleModal()}>
          Contact
        </Button>
      </HeaderWrapper.Menu>
    </HeaderWrapper>
  );
}
