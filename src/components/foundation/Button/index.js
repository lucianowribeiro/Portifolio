import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import Text from '../Text';
import SendIcon from './icons';
import breakpointsMedia from '../../../theme/utils/breakpointsMedia';

const ButtonWrapper = styled.button`
  cursor: pointer;
  background-color: rgba(0, 150, 136, 0.4);
  border: none;
  padding: 0.5rem;
  border-radius: ${({ theme }) => theme.borderRadius.card};
  ${breakpointsMedia({
    xs: css`
      &{
        width: 4rem;    
      }
      & span {
        display: none;
      }
    `,
    md: css`
      & {
        width: 7rem;   
      }
      & span {
        display: initial;
      }
    `,
  })}
  & span{
    color: ${({ theme }) => theme.colors.primary.main.color}; 
  }
  &:hover,&:active{
    background-color: rgba(0, 150, 136, 0.8);
    & span, & path {
      color: white;
    }
    transition: ${({ theme }) => theme.transition};
  }
  &:disabled{
    background-color: rgba(0,0,0,0.1);
    & span, & path {
      color: initial;
    }
    cursor: not-allowed;
  }
`;

export default function Button({ children, onClick, disabled }) {
  return (
    <ButtonWrapper type="submit" onClick={onClick} disabled={disabled}>
      <Text tag="span" mobile="paragraphXS" desktop="paragraphMD">
        {children}
      </Text>
      {' '}
      <SendIcon />
    </ButtonWrapper>
  );
}
Button.defaultProps = {
  onClick: undefined,
  disabled: false,
};
Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
};
