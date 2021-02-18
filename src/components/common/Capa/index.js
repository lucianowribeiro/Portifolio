import styled from 'styled-components';

const Capa = styled.div`   
    height: 60vh;
    display: flex;
    flex-direction: column; 
    justify-content: end;
    align-items: center;
    background-image: url('./images/4401280.jpg');
    background-position: top;
    background-size: 120%;
    background-repeat: no-repeat;
    font-family: ${({ theme})=>theme.fontFamily};
    &>h1,&>h2{
        font-size: 7vw;
    }
         
    
`
export default Capa;