import styled from 'styled-components';
import PropTypes from 'prop-types';
import React from 'react';

const FooterStyle = styled.footer`
    display: flex;
    justify-content: center;
    background-color: rgba(0, 150, 136,0.4);
    height: 8vh;
    width: 100%;
    border: 2px solid ${({ theme }) => theme.colors.borders.main.color};
`;
FooterStyle.Icon = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;   
    width: 30%;
    & a{
        margin-left: 12px;
        height: 60%;
    }
    & a:hover{ 
        transform: scale(1.2);
        transition: transform ${({ theme }) => theme.transition};
    }
    & a img{
        height: 100%;
    }
`;

export default function Footer() {
  return (
    <FooterStyle>
      <FooterStyle.Icon>
        <a href="https://www.linkedin.com/in/lucianowribeiro/" rel="noreferrer" target="_blank"><img src="./images/linkedin.svg" alt="linkedin" /></a>
        <a href="https://github.com/lucianowribeiro/" rel="noreferrer" target="_blank"><img src="./images/github.svg" alt="github" /></a>
        <a href="./documents/CV_front.pdf" rel="noreferrer" target="_blank"><img src="./images/cv.svg" alt="cv" /></a>
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
