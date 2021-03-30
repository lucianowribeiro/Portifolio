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
  const repositories = await fetch('https://api.github.com/users/lucianowribeiro/repos?access_token=d03ff538eff18268e538039b715e1323343ab519')
    .then((resp) => resp.json())
    .finally((data) => data);
  return {
    props: {
      repositories,
    },
  };
}
