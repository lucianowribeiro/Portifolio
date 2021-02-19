import styled from 'styled-components';


const FooterStyle = styled.footer`
    display: flex;
    justify-content: center;
    background-color: rgba(0, 150, 136,0.4);
    height: 8vh;
    width: 100%;
    border: 2px solid rgb(94, 144, 163,.7);
`
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
    & a img{
        height: 100%;
    }
`;

export default function Footer(){
    return (
        <FooterStyle>
            <FooterStyle.Icon>
                <a href="https://www.linkedin.com/in/lucianowribeiro/" target="_blank"><img src="./images/linkedin.svg"/></a>
                <a href="https://github.com/lucianowribeiro/" target="_blank"><img src="./images/github.svg"/></a>
                <a href="./documents/CV_front.pdf" target="_blank"><img src="./images/cv.svg"/></a>
            </FooterStyle.Icon>
        </FooterStyle>
    )   
}   