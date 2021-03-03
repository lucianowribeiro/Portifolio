import styled from 'styled-components';
import { Send } from '@styled-icons/boxicons-regular';

const SendIcon = styled(Send)`
  width: 23px;
  color: ${({ theme }) => theme.colors.primary.main.color};
`;

export default SendIcon;
