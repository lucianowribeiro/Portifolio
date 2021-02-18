import styled from "styled-components";

const links = [
  {
    text: "About me",
    url: "#about",
  },
  {
    text: "Projects",
    url: "#projects",
  },
  {
    text: "Contact",
    url: "#contact",
  },
];

const HeaderWrapper = styled.header`
  display: flex;
  height: 10vh;
  justify-content: center;
  align-items: center;
`;
HeaderWrapper.Logo = styled.img`
  border-radius: 50%;
  height: 80%;  
`;
HeaderWrapper.Menu = styled.nav`
  & > ul {
    display: flex;
  }
  & > ul > li{
    justify-content: center;
    font-size: 0.9rem;
    list-style: none;
    margin: 4px;
  }
  & > ul > li> a{
    text-decoration: none;
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
                <a href={link.url}>{link.text}</a>
              </li>
            );
          })}
        </ul>
      </HeaderWrapper.Menu>
    </HeaderWrapper>
  );
}
