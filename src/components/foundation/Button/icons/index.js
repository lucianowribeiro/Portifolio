import styled from 'styled-components';
import { Send } from '@styled-icons/boxicons-regular';
import lodash from 'lodash';

const SendIcon = styled(Send)`
  width: 23px;
  color: ${({ theme, mode }) => lodash.get(theme, `${mode}`).primary.main.contrast};
`;

export default SendIcon;
