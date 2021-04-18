import React from 'react';
import AboutScreen from '../src/components/screens/AboutScreeen';
import webPageHOC from '../src/components/wrappers/WebPage/hoc';
import CMSGraphCLient from '../src/infra/cms/CMSGraphClient';

function AboutPage({
  title, image, description, repositories,
}) {
  return (
    <AboutScreen
      title={title}
      image={image}
      description={description}
      repositories={repositories}
    />
  );
}
AboutPage.propTypes = AboutScreen.propTypes;

export default webPageHOC(AboutScreen, {
  pageProps: {
    seoProps: {
      headTitle: 'About',
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
  const repositories = await fetch(
    'https://api.github.com/users/lucianowribeiro/repos',
  )
    .then((resp) => resp.json())
    .finally((data) => data);
  const query = ` 
    query {
      aboutpage(locale: en){
        aboutTitle,
        aboutImage {
          url,
        },
        aboutText,
      }
    }
  `;
  const { aboutpage } = await CMSGraphCLient(query);
  console.log(aboutpage);
  return {
    props: {
      title: aboutpage.aboutTitle,
      image: aboutpage.aboutImage.url,
      description: aboutpage.aboutText,
      repositories,
    },
  };
}
