import React from 'react';
import ProjectsScreen from '../../src/components/screens/ProjectsScreen';
import webPageHOC from '../../src/components/wrappers/WebPage/hoc';
import projectService from '../../src/services/project';

function ProjectsPage(title, link, image, description) {
  return (
    <ProjectsScreen title={title} link={link} image={image} description={description} />
  );
}
ProjectsPage.propTypes = ProjectsScreen.propTypes;

export default webPageHOC(ProjectsScreen, {
  pageProps: {
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

export async function getStaticProps({ params }) {
  const query = `
    query{
      projectItem(filter: {
        projectTitle: {
          eq: "${params.id}",
        }
      } ,locale: en){
        projectTitle,
        projectImage{
          url,
        },
        projectDescription,
        projectUrl,
      }
    }`;
  const dataProjects = await projectService.getProjects('Item', query);
  return {
    props: {
      ...dataProjects,
      pageProps: {
        seoProps: {
          headTitle: dataProjects.title,
        },
      },
    },
  };
};
export async function getStaticPaths() {
  const query = `
      query {
        allProjectItems {
          projectTitle
        }
      }
    `;
  const paths = await projectService.getPaths(query);
  return {
    paths,
    fallback: false,
  };
}
