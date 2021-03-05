import styled, { css } from 'styled-components';
import breakpointsMedia from '../../../theme/utils/breakpointsMedia';

export const links = [
  {
    text: 'About me',
    url: '#about',
  },
  {
    text: 'Projects',
    url: '#projects',
  },
];
const Header = styled.header`
  display: flex;
  ${breakpointsMedia({
    xs: css`
      justify-content: center;
      height: 15vh;
    `,
    md: css`
      justify-content: space-around;
      height: 10vh;
    `,
  })}
  align-items: center;
  width: 100%;
`;
Header.Logo = styled.img`
  border-radius: ${({ theme }) => theme.borderRadius.logo};
  height: 70%;
`;
Header.Menu = styled.nav`
  & ul {
    display: flex;
  }
  & li {
    justify-content: center;
    list-style: none;
    margin: 8px;
  }
  & a {
    color: ${({ theme }) => theme.colors.primary.main.color};
    text-underline-position: under;
  }
  & a:hover {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.primary.main.contrast};
    transition: ${({ theme }) => theme.transition};
  }
`;

export default Header;
