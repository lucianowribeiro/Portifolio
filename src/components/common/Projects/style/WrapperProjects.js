import styled from 'styled-components';


const WrapperProjects =styled.div`
    display: flex;
    flex-direction: column;
    width: 80%;
    padding-bottom: 20px;
`
WrapperProjects.SectionTitle =styled.section`
    border-top: 1px solid rgba(94, 144, 163,.7);
    height: 5%;
    & h2{
        display: flex;
        justify-content: center;
        align-items: center;
    }
`
WrapperProjects.SectionCard =styled.section`
    height: 90%;
`

export default WrapperProjects;