import React from 'react';
import ProjectsScreen from '../../src/components/screens/ProjectsScreen';
import webPageHOC from '../../src/components/wrappers/WebPage/hoc';
import db from '../../public/db.json';

function ProjectsPage(title, link, image, description) {
  return (
    <ProjectsScreen title={title} link={link} image={image} description={description} />
  );
}
ProjectsPage.propTypes = ProjectsScreen.propTypes;

export default webPageHOC(ProjectsScreen);

export async function getStaticProps({ params }) {
  const dataPage = {
    name: '',
    image: '',
    title: '',
    description: '',
    link: '',
    url: '',
  };
  const { projects } = db;
  projects.forEach((project) => {
    if (project.name === params.id) {
      dataPage.name = project.name; dataPage.image = project.image;
      dataPage.title = project.title;
      dataPage.description = project.description;
      dataPage.link = project.link;
      dataPage.url = project.url;
    }
  });
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
  const paths = projects.map((project) => ({ params: { id: project.name } }));
  return {
    paths,
    fallback: false,
  };
}
