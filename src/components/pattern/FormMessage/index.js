/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { Lottie } from '@crello/react-lottie';
import Text from '../../foundation/Text';
import TextField from '../../input/Textfield';
import breakpointsMedia from '../../../theme/utils/breakpointsMedia';
import {
  CloseIcon, UserIcon, EmailIcon, MessageIcon,
} from './icons';
import Button from '../../foundation/Button';
import ErrorAnimation from './animations/ErrorAnimation.json';
import LoadingAnimation from './animations/LoadingAnimation.json';
import SuccessAnimation from './animations/SuccessAnimation.json';
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
  DONE: 'DONE',
};
export default function FormMessage({ isOpen, onClose, propsModal }) {
  const [isFormSubmited, setIsFormSubmited] = React.useState(false);
  const [submissionStatus, setSubmissionStatus] = React.useState(
    formStatus.DEFAULT,
  );
  const [userInfo, setUserInfo] = React.useState({
    name: '',
    email: '',
    message: '',
  });
  const isFieldEmpty = userInfo.name.length === 0
    || userInfo.email.length === 0
    || userInfo.message.length === 0;

  function handleChange(event) {
    const nameField = event.target.getAttribute('name');
    const valueField = event.target.value;
    setUserInfo({
      ...userInfo,
      [nameField]: [valueField],
    });
  }

  return (
    <motion.div /* framer motion */
      {...propsModal}
      variants={{
        open: {
          y: 0,
          opacity: 1,
          scale: 1,
          transition: {
            delayChildren: 0.5,
            staggerChildren: 0.2,
          },
        },
        closed: {
          y: '-100%',
          opacity: 0,
          scale: 0,
        },
      }}
      transition={{ duration: 1 }}
      animate={isOpen ? 'open' : 'closed'}
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: 'white',
        boxShadow: '3px 2px 5px #009688',
        borderRadius: '3%',
      }}
    >
      <FormMessageWrapper>
        <FormMessageWrapper.Title>
          <Text tag="h2" mobile="subTitleXS" desktop="subTitleMD">
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
                  'https://instalura-api.vercel.app/api/users',
                  {
                    method: 'POST',
                    parameters: {
                      body: JSON.stringify(userDTO),
                      headers: {
                        'Content-Type': 'application/json',
                      },
                    },
                  },
                )
                  .then((response) => {
                    if (response.ok) {
                      console.log(response);
                      return response.json();
                    }
                    throw new Error('Error on submit request');
                  })
                  .then((response) => {
                    setSubmissionStatus(formStatus.DONE);
                    console.log(response);
                  })
                  .catch((error) => {
                    setSubmissionStatus(formStatus.ERROR);
                    console.log(error);
                  });
              }, 2000);
            }}
          >
            <UserIcon />
            <TextField
              tag="input"
              type="text"
              mobile="paragraphXS"
              desktop="paragraphMD"
              value={userInfo.name}
              name="name"
              onChange={handleChange}
              placeholder="Name"
              required
            />
            <EmailIcon />
            <TextField
              tag="input"
              type="email"
              mobile="paragraphXS"
              desktop="paragraphMD"
              value={userInfo.email}
              name="email"
              onChange={handleChange}
              placeholder="Email"
              required
            />
            <MessageIcon />
            <TextField
              tag="textarea"
              mobile="paragraphXS"
              desktop="paragraphMD"
              value={userInfo.message}
              name="message"
              wrap="true"
              onChange={handleChange}
              placeholder="Type your message here ..."
              required
            />
            <Button disabled={isFieldEmpty}>Send</Button>
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
    </motion.div>
  );
}
FormMessage.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  propsModal: PropTypes.object.isRequired,
};
