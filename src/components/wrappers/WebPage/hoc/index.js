/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import PropTypes from 'prop-types';
import WebPage from '..';
import WebGlobalProvider from '../provider';
import theme from '../../../../theme';

export default function webPageHOC(PageComponent, { pageProps } = { pageProps: {} }) {
  return (props) => (
    <WebGlobalProvider theme={theme}>
      <WebPage
        theme={theme}
        {...pageProps}
        {...props.pageProps}
      >
        <PageComponent {...props} />
      </WebPage>
    </WebGlobalProvider>
  );
}
webPageHOC.propTypes = {
  pageProps: PropTypes.shape({
    seoProps: PropTypes.shape({
      headTitle: PropTypes.string,
    }),
    containerProps: PropTypes.shape({
      display: PropTypes.string,
      flexDirection: PropTypes.string,
      alignItems: PropTypes.string,
      width: PropTypes.string,
    }),
    boxProps: PropTypes.shape({
      display: PropTypes.string,
      flexDirection: PropTypes.string,
      justifyContent: PropTypes.string,
      alignItems: PropTypes.string,
      width: PropTypes.string,
      height: PropTypes.string,
    }),
  }),
};
