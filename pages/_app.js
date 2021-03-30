/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.svg" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Truculenta:wght@100;300;400;500;700&display=swap" rel="stylesheet" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
App.defaultProps = {
  pageProps: {},
};

App.propTypes = {
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
