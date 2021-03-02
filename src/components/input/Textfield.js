import styled from 'styled-components';
import Text from '../foundation/Text';

const TextField = styled(Text)`
    margin: 1rem;
    width: 90%;
    border-style: hidden;
    border-bottom: solid 1px ${({ theme }) => theme.colors.borders.main.color};
    color: ${({ theme }) => theme.colors.primary.text};
    &::placeholder{
        color: ${({ theme }) => theme.colors.borders.main.color};
    }
    &[name="name"]{
        margin-top: 2rem;
    }
    &[name="message"]{
        height: 5rem;
        resize: none;
    }
`;

export default TextField;
