import styled ,{ css } from "styled-components";
import breakpointsMedia from "../../../theme/utils/breakpointsMedia";
import Text from "../../foundation/Text";
import PropTypes from 'prop-types';

const links = [
  {
    text: "About me",
    url: "#about",
  },
  {
    text: "Contact",
    url: "#contact",
  },
];

const HeaderWrapper = styled.header`
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
HeaderWrapper.Logo = styled.img`
  border-radius: ${({theme})=> theme.borderRadius};
  height: 70%;  
`;
HeaderWrapper.Menu = styled.nav`
 & ul {
    display: flex;
  }
  & li{
    justify-content: center;
    list-style: none;
    margin: 8px;
  }
  & a{
    color: ${({theme})=> theme.colors.primary.main.color};
    text-underline-position: under;
  }
  & a:hover{
    text-decoration: none;
    color: ${({theme})=> theme.colors.primary.main.contrast};
    transition: ${({theme})=> theme.transition};
  }
`;

export default function Header() {
  return (
    <HeaderWrapper>
      <HeaderWrapper.Logo src="./images/logo.jpeg" />
      <HeaderWrapper.Menu>
        <ul>
          {links.map((link) => {
            return (
              <li key={link.url}>
                <Text as="a" pattern="menuXS" variant="menuMD" href={link.url}>{link.text}</Text>
              </li>
            );
          })}
        </ul>
      </HeaderWrapper.Menu>
    </HeaderWrapper>
  );
}
HeaderWrapper.propTypes = {
  children: PropTypes.node,
};  
HeaderWrapper.Logo.propTypes = {
  src: PropTypes.string.isRequired,
};
HeaderWrapper.Menu.propTypes = {
  children: PropTypes.node,
};