/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import Text from '../../foundation/Text';
import TextField from '../../input/Textfield';
import breakpointsMedia from '../../../theme/utils/breakpointsMedia';
import {
  CloseIcon, UserIcon, EmailIcon, MessageIcon,
} from './icons';
import Button from '../../foundation/Button';
import Box from '../../foundation/Box';

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
  & form button {
    align-self: flex-end;
    ${breakpointsMedia({
    xs: css`
        margin-right: 1rem;
      `,
    md: css`
        margin-right: 2rem;
      `,
  })}
  }
`;
const formStatus = {
  DEFAULT: 'DEFAULT',
  LOADING: 'LOADING',
  ERROR: 'ERROR',
  SUCCESS: 'SUCCESS',
};
export default function FormMessage({ onClose, propsModal }) {
  const [isFormSubmited, setIsFormSubmited] = React.useState(false);
  const [submissionStatus, setSubmissionStatus] = React.useState(
    formStatus.DEFAULT,
  );
  const [userInfo, setUserInfo] = React.useState({
    name: '',
    email: '',
    message: '',
  });
  function handleChange(event) {
    const nameField = event.target.getAttribute('name');
    const valueField = event.target.value;
    setUserInfo({
      ...userInfo,
      [nameField]: [valueField],
    });
    console.log(userInfo);
  }
  const isFieldEmpty = userInfo.name.length === 0
    || userInfo.email.length === 0
    || userInfo.message.length === 0;
  return (
    <Box
      {...propsModal}
      display="flex"
      flexDirection="column"
      justifyContent="space-around"
      alignItems="center"
      width={{ xs: '85%', md: '30%' }}
      height={{ xs: '80%', md: '70%' }}
      backgroundColor="white"
      boxShadow="3px 2px 5px #009688"
      borderRadius="3%"
    >
      <FormMessageWrapper>
        <FormMessageWrapper.Title>
          <Text tag="h2" pattern="subTitleXS" variant="subTitleMD">
            Send your message
          </Text>
          <CloseIcon onClick={onClose} />
        </FormMessageWrapper.Title>
        <FormMessageWrapper.Content>
          <form
            onSubmit={(event) => {
              event.preventDefault();
              setIsFormSubmited(true);
              const userDTO = {
                name: userInfo.name,
                email: userInfo.email,
                message: userInfo.message,
              };
              setSubmissionStatus(formStatus.LOADING);
              setTimeout(() => {
                fetch(
                  'https://contact-form-api-jamstack.herokuapp.com/message',
                  {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(userDTO),
                  },
                )
                  .then((response) => {
                    if (response.ok) {
                      return response.json();
                    }
                    throw new Error('Error on submit request');
                  })
                  .then(() => {
                    setSubmissionStatus(formStatus.DONE);
                  })
                  .catch(() => {
                    setSubmissionStatus(formStatus.ERROR);
                  });
              }, 2000);
            }}
          >
            <UserIcon />
            <TextField
              tag="input"
              pattern="paragraphXS"
              variant="paragraphMD"
              value={userInfo.name}
              name="name"
              onChange={handleChange}
              placeholder="Name"
            />
            <EmailIcon />
            <TextField
              tag="input"
              pattern="paragraphXS"
              variant="paragraphMD"
              value={userInfo.email}
              name="email"
              onChange={handleChange}
              placeholder="Email"
            />
            <MessageIcon />
            <TextField
              tag="textarea"
              pattern="paragraphXS"
              variant="paragraphMD"
              value={userInfo.message}
              name="message"
              wrap="true"
              onChange={handleChange}
              placeholder="Type your message here ..."
            />
            <Button disabled={isFieldEmpty}>
              Send
            </Button>
          </form>
        </FormMessageWrapper.Content>
      </FormMessageWrapper>
      {isFormSubmited && submissionStatus === formStatus.DONE && (
        <Box display="flex" justifyContent="center">
          <Lottie
            width="150px"
            height="150px"
            config={{
              animationData: SuccessAnimation,
              loop: true,
              autoplay: true,
            }}
          />
        </Box>
      )}
      {isFormSubmited && submissionStatus === formStatus.LOADING && (
        <Box display="flex" justifyContent="center">
          <Lottie
            width="150px"
            height="150px"
            config={{
              animationData: LoadingAnimation,
              loop: true,
              autoplay: true,
            }}
          />
        </Box>
      )}
      {isFormSubmited && submissionStatus === formStatus.ERROR && (
        <Box display="flex" justifyContent="center">
          <Lottie
            width="150px"
            height="150px"
            config={{
              animationData: ErrorAnimation,
              loop: true,
              autoplay: true,
            }}
          />
        </Box>
      )}
    </Box>
  );
}
FormMessage.propTypes = {
  onClose: PropTypes.func.isRequired,
  propsModal: PropTypes.object.isRequired,
};
