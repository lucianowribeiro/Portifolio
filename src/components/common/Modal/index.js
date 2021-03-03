/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

const ModalWrapper = styled.div`
  position: fixed;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  z-index: 100;
  transition: .2s;
  background-color: rgba(0, 150, 136, 0.1);
  ${({ isOpen }) => {
    if (isOpen) {
      return css`
        opacity: 1;
        pointer-events: all;
      `;
    }
    return css`
      opacity: 0;
      pointer-events: none;
    `;
  }}
`;

export default function Modal({ isOpen, onClose, children }) {
  return (
    <ModalWrapper
      onClick={(event) => {
        const isSafeArea = event.target.closest('[data-modal-safe-area="true"]');
        if (!isSafeArea) onClose();
      }}
      isOpen={isOpen}
    >
      {children({
        'data-modal-safe-area': 'true',
      })}
    </ModalWrapper>
  );
}

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.func.isRequired,
};
