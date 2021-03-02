/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import styled from 'styled-components';
import Box from '../../foundation/Box';
import FormMessage from '../../pattern/FormMessage';

const ModalWrapper = styled.div`
  position: absolute;
  top: 0;
  padding-top: 1vh;
  padding-bottom: 1vh;
  height: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  z-index: 100;
  background-color: rgba(0, 150, 136, 0.1);
`;

export default function Modal() {
  return (
    <ModalWrapper>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="space-around"
        alignItems="center"
        width={{ xs: '85%', md: '35%' }}
        height="80%"
        backgroundColor="white"
        boxShadow="3px 2px 5px #009688"
        borderRadius="3%"

      >
        <FormMessage />
        paranbens vc é o cara
      </Box>
    </ModalWrapper>
  );
}
