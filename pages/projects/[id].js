import React from 'react';
import ProjectsScreen from '../../src/components/screens/ProjectsScreen';
import webPageHOC from '../../src/components/wrappers/WebPage/hoc';
import db from '../../public/db.json';
import projectService from '../../src/services/project';

function ProjectsPage(title, link, image, description) {
  return (
    <ProjectsScreen title={title} link={link} image={image} description={description} />
  );
}
ProjectsPage.propTypes = ProjectsScreen.propTypes;

export default webPageHOC(ProjectsScreen);

export async function getStaticProps({ params }) {
  const { projects } = db;
  const dataPage = projectService.forProjects(params, projects);
  return {
    props: {
      title: dataPage.title,
      link: dataPage.url,
      image: dataPage.image,
      description: dataPage.description,
      pageProps: {
        seoProps: {
          headTitle: dataPage.title,
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

    },
  };
}
export async function getStaticPaths() {
  const { projects } = db;
  const paths = projectService.mapPaths(projects);
  return {
    paths,
    fallback: false,
  };
}
