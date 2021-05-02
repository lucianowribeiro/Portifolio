import styled from 'styled-components';
import { Switch } from '@styled-icons/entypo/Switch';
import lodash from 'lodash';

export const LightIcon = styled(Switch)`
    color: ${({ theme, mode }) => lodash.get(theme, `${mode}`).primary.main.contrast};
    height: 2rem;
`;
export const DarkIcon = styled(Switch)`
    color: ${({ theme, mode }) => lodash.get(theme, `${mode}`).primary.main.contrast};
    height: 2rem;
`;
