import React from 'react';
import styled, { css } from 'styled-components';
import { CloseCircle, Email } from '@styled-icons/evaicons-solid';
import { Send, UserCircle, Message } from '@styled-icons/boxicons-regular';
import Text from '../../foundation/Text';
import TextField from '../../input/Textfield';
import breakpointsMedia from '../../../theme/utils/breakpointsMedia';

const FormMessageWrapper = styled.section`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;

`;
FormMessageWrapper.Title = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
`;
FormMessageWrapper.Content = styled.div`
  width: 90%;
  & form {
    display: flex;
    position: relative;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  & form button{
    align-self: flex-end;
    ${breakpointsMedia({
    xs: css`
      margin-right: 1rem;
    `,
    md: css`
      margin-right: 2rem;
    `,
  })}
    background-color: rgba(0, 150, 136,0.4);
    border: none;
    width: 6rem;
    padding: 0.7rem;
    border-radius: ${({ theme }) => theme.borderRadius.card};
  }
`;
/* ---------Styled Icons--------------- */
const CloseIcon = styled(CloseCircle)`
  width: 30px;
  color: ${({ theme }) => theme.colors.primary.main.color};
  align-self: flex-start;
`;
const SendIcon = styled(Send)`
  width: 20px;
  color: ${({ theme }) => theme.colors.primary.main.color};
`;
const UserIcon = styled(UserCircle)`
  width: 30px;
  position: absolute;
  ${breakpointsMedia({
    xs: css`
      right: 5%;
      top: 0%;
    `,
    md: css`
      top: 0%;
      right: 7% ;
    `,
  })}
  color: ${({ theme }) => theme.colors.primary.main.color};
`;
const EmailIcon = styled(Email)`
  width: 30px;
  position: absolute;
  top: 22%;
  ${breakpointsMedia({
    xs: css`
      right: 5%;
    `,
    md: css`
      top: 22%;
      right: 7% ;
    `,
  })}
  color: ${({ theme }) => theme.colors.primary.main.color};
`;
const MessageIcon = styled(Message)`
  width: 30px;
  position: absolute;
  top: 41%;
  ${breakpointsMedia({
    xs: css`
      right: 5%;
    `,
    md: css`
      top: 43%;
      right: 7% ;
    `,
  })}
  color: ${({ theme }) => theme.colors.primary.main.color};
`;
/* ---------Styled Icons--------------- */
export default function FormMessage() {
  return (
    <FormMessageWrapper>
      <FormMessageWrapper.Title>
        <Text tag="h2" pattern="subTitleXS" variant="subTitleMD">
          Send your message
        </Text>
        <CloseIcon />
      </FormMessageWrapper.Title>
      <FormMessageWrapper.Content>
        <form>
          <UserIcon />
          <TextField
            tag="input"
            pattern="paragraphXS"
            variant="paragraphMD"
            name="name"
            type="text"
            placeholder="Name"
            required
          />
          <EmailIcon />
          <TextField
            tag="input"
            pattern="paragraphXS"
            variant="paragraphMD"
            name="email"
            type="email"
            placeholder="Email"
            required
          />
          <MessageIcon />
          <TextField
            tag="textarea"
            pattern="paragraphXS"
            variant="paragraphMD"
            name="message"
            wrap="true"
            placeholder="Type your message here ..."
            required
          />
          <button type="submit">
            <Text tag="span" pattern="paragraphXS" variant="paragraphMD">
              Send
            </Text>
            <SendIcon />
          </button>
        </form>
      </FormMessageWrapper.Content>
    </FormMessageWrapper>
  );
}
