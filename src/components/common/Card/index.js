import styled from 'styled-components';

const Card = styled.article`
    display: flex;
    flex-direction: column;
    width: 100%;
`;
Card.Image = styled.img`
    width: 100%;
`;
Card.Title = styled.h3`
    text-align: center;
`;
Card.Text = styled.p`
    font-size: 0.9rem;
    text-align: justify;
`;
export default Card;