import React from 'react';
import AboutScreen from '../src/components/screens/AboutScreeen';
import webPageHOC from '../src/components/wrappers/WebPage/hoc';

function AboutPage({ repositories }) {
  return <AboutScreen repositories={repositories} />;
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
  const repositories = await fetch('https://api.github.com/users/lucianowribeiro/repos')
    .then((resp) => resp.json())
    .finally((data) => data);

  console.log(repositories.message);
  return {
    props: {
      repositories,
    },
  };
}
