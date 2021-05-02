import styled from 'styled-components';
import lodash from 'lodash';
import Text from '../foundation/Text';

const TextField = styled(Text)`
    margin: 1rem;
    width: 90%;
    border-style: hidden;
    border-bottom: ${({ theme, mode }) => lodash.get(theme, `${mode}`).borders.main.color};
    color: ${({ theme, mode }) => lodash.get(theme, `${mode}`).primary.text.color};
    background-color: ${({ theme, mode }) => lodash.get(theme, `${mode}`).background.main.color};
    &::placeholder{
        color: ${({ theme, mode }) => lodash.get(theme, `${mode}`).primary.main.contrast};
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
