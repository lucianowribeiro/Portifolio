import styled, { css } from 'styled-components';

import { CloseCircle, Email } from '@styled-icons/evaicons-solid';
import { UserCircle, Message } from '@styled-icons/boxicons-regular';
import lodash from 'lodash';
import breakpointsMedia from '../../../../theme/utils/breakpointsMedia';
/* ---------Styled Icons--------------- */
export const CloseIcon = styled(CloseCircle)`
  width: 30px;
  color: ${({ theme, mode }) => lodash.get(theme, `${mode}`).primary.main.contrast};
  align-self: flex-start;
  cursor: pointer;
`;
export const UserIcon = styled(UserCircle)`
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
  color: ${({ theme, mode }) => lodash.get(theme, `${mode}`).primary.main.contrast};
`;
export const EmailIcon = styled(Email)`
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
  color: ${({ theme, mode }) => lodash.get(theme, `${mode}`).primary.main.contrast};
`;
export const MessageIcon = styled(Message)`
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
  color: ${({ theme, mode }) => lodash.get(theme, `${mode}`).primary.main.contrast};
`;
/* ---------Styled Icons--------------- */
