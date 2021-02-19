import styled from "styled-components";

const Capa = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: center;
  height: 60vh;
  width: 100%;
  background-image: url("./images/4401280.jpg");
  background-position: top;
  background-size: 90%;
  background-repeat: no-repeat;
  & > h1,
  & > h2 {
    font-size: 7vw;
    font-weight: normal;
    margin: 2px;
    color: #2b3d44;
    text-shadow: 1px 0px 0px white, 
                -1px 0px 0px white, 
                 0px 1px 0px white,
                 0px -1px 0px white;
  }
`;
export default Capa;
