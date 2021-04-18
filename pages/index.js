import React from 'react';
import HomeScreen from '../src/components/screens/HomeScreen';
import webPageHOC from '../src/components/wrappers/WebPage/hoc';
import projectService from '../src/services/project';

function HomePage(projects) {
  return (
    <HomeScreen projects={projects} />
  );
}
HomePage.propTypes = HomeScreen.propTypes;
export default webPageHOC(HomeScreen, {
  pageProps: {
    seoProps: {
      headTitle: 'Home',
    },
    boxProps: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: '100%',
    },
  },
});

export async function getStaticProps() {
  const query = `
  query{
    allProjectItems(orderBy:id_ASC,locale: en){
      projectTitle,
      projectImage{
        url,
      },
      projectDescription,
      projectUrl,
    }
    }
    
  `;
  const projects = await projectService.getProjects('all', query);
  return {
    props: {
      projects,
    },
  };
}
