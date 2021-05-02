import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import lodash from 'lodash';
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
      & span{
        display: none;
      }
    `,
    md: css`
      & {
        width: 7rem;   
      }
      & span{
        display: initial;
      }
    `,
  })}
  & span{
    color: ${({ theme, mode }) => lodash.get(theme, `${mode}`).primary.main.contrast};
  }
  &:hover,&:active{
    background-color: ${({ theme, mode }) => lodash.get(theme, `${mode}`).primary.main.color};
    & span,& path {
      color: ${({ theme, mode }) => lodash.get(theme, `${mode}`).background.main.color};
    }
    transition: ${({ theme }) => theme.transition};
  }
  &:disabled{
    background-color: ${({ theme, mode }) => lodash.get(theme, `${mode}`).secondary.button.color};
    & span ,& path {
      color: ${({ theme, mode }) => lodash.get(theme, `${mode}`).primary.text.color}
    }
    cursor: not-allowed;
  }
`;

export default function Button({
  children, onClick, disabled, mode,
}) {
  return (
    <ButtonWrapper mode={mode} type="submit" onClick={onClick} disabled={disabled}>
      <Text tag="span" mobile="paragraphXS" desktop="paragraphMD">
        {children}
      </Text>
      {' '}
      <SendIcon mode={mode} />
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
