/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

import lodash from 'lodash';
import Text from '../../foundation/Text';
import TextField from '../../input/Textfield';
import breakpointsMedia from '../../../theme/utils/breakpointsMedia';
import {
  CloseIcon, UserIcon, EmailIcon, MessageIcon,
} from './icons';
import Button from '../../foundation/Button';
import Result from './Result';
import { WebPageContext } from '../../wrappers/WebPage';

const FormMessageWrapper = styled.section`
  width: 95%;
  height: 92%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;  
`;
FormMessageWrapper.Title = styled.div`
  width: 92%;
  height: 25%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  & h2 {
    color: ${({ theme, mode }) => lodash.get(theme, `${mode}`).primary.main.contrast};
  }
`;
FormMessageWrapper.Content = styled.div`
  width: 92%;
  height: 65%;

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
export default function FormMessage({
  isOpen, onClose, propsModal, isFormSubmited, setIsFormSubmited,
}) {
  const [isFieldEmpty, setFieldEmpty] = React.useState(true);
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
      [nameField]: valueField,
    });
    if (!(userInfo.name === '' || userInfo.email === '' || userInfo.message === '')) { setFieldEmpty(false); }
  }
  function handleBlur(event) {
    if (event.target.textLength <= 0) { setFieldEmpty(true); }
  }
  const webPage = React.useContext(WebPageContext);
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
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: `${webPage.themeMode === 'light' ? '#fff' : '#1e3238'}`,
        boxShadow: '3px 2px 5px #009688',
        borderRadius: '3%',
      }}
    >
      <FormMessageWrapper>
        <FormMessageWrapper.Title mode={webPage.themeMode}>
          <Text tag="h2" mobile="subTitleXS" desktop="subTitleMD">
            {!isFormSubmited
              && 'Send your message'}
            {isFormSubmited
              && submissionStatus === formStatus.LOADING
              && 'Loading ...'}
            {isFormSubmited
              && submissionStatus === formStatus.ERROR
              && 'Try again :('}
            {isFormSubmited
              && submissionStatus === formStatus.DONE
              && 'Congratulations :)'}
          </Text>
          <CloseIcon mode={webPage.themeMode} onClick={onClose} />
        </FormMessageWrapper.Title>
        {!isFormSubmited && (
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
              <UserIcon mode={webPage.themeMode} />
              <TextField
                mode={webPage.themeMode}
                tag="input"
                type="text"
                mobile="paragraphXS"
                desktop="paragraphMD"
                value={userInfo.name}
                name="name"
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Name"
                required
              />
              <EmailIcon mode={webPage.themeMode} />
              <TextField
                mode={webPage.themeMode}
                tag="input"
                type="email"
                mobile="paragraphXS"
                desktop="paragraphMD"
                value={userInfo.email}
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Email"
                required
              />
              <MessageIcon mode={webPage.themeMode} />
              <TextField
                mode={webPage.themeMode}
                tag="textarea"
                mobile="paragraphXS"
                desktop="paragraphMD"
                value={userInfo.message}
                name="message"
                wrap="true"
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Type your message here ..."
                required
              />
              <Button mode={webPage.themeMode} disabled={isFieldEmpty}>Send</Button>
            </form>
          </FormMessageWrapper.Content>
        )}
      </FormMessageWrapper>
      {isFormSubmited && submissionStatus === formStatus.DONE && (
        <Result animation={formStatus.DONE} />
      )}
      {isFormSubmited && submissionStatus === formStatus.LOADING && (
        <Result animation={formStatus.LOADING} />
      )}
      {isFormSubmited && submissionStatus === formStatus.ERROR && (
        <Result animation={formStatus.ERROR} />
      )}
    </motion.div>
  );
}
FormMessage.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  isFormSubmited: PropTypes.bool.isRequired,
  setIsFormSubmited: PropTypes.func.isRequired,
  propsModal: PropTypes.object.isRequired,
};
