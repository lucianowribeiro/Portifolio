import React from 'react';
import AboutScreen from '../src/components/screens/AboutScreen';
import webPageHOC from '../src/components/wrappers/WebPage/hoc';

function AboutPage({ repositories }) {
  return (
    <AboutScreen repositories={repositories} />
  );
}
AboutPage.propTypes = AboutScreen.propTypes;

export default webPageHOC(AboutScreen, {
  pageProps: {
    seoProps: {
      headTitle: 'Projects',
    },
    containerProps: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: '100%',
    },
    boxProps: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      height: '100%',
    },
  },
});

export async function getStaticProps() {
  const repositories = await fetch('https://api.github.com/users/lucianowribeiro/repos?access_token=3f4b6a6a971c074b039297998ea98541b34f9b19')
    .then((resp) => resp.json())
    .finally((data) => data);
  return {
    props: {
      repositories,
    },
  };
}