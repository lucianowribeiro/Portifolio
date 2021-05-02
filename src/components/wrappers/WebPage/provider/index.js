/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../../../../theme/GlobalStyle';

export default function WebGlobalProvider({ theme, children }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
}

WebGlobalProvider.propTypes = {
  children: PropTypes.node.isRequired,
  theme: PropTypes.object.isRequired,
};
