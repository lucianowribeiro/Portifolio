import styled from 'styled-components';

const AboutStyle = styled.section`
    font-family: ${({ theme})=>theme.fontFamily};
    height: 20vh;
    &>p{
        text-align: center;   
        vertical-align: middle;
    }
`

export default function About(){
    return (
        <AboutStyle>
            <p>lorem lorem</p>
        </AboutStyle>
    )
}