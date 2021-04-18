import CMSGraphCLient, { gql } from '../../infra/cms/CMSGraphClient';

const projectService = {
  async getProjects(type, query) {
    if (type === 'all') {
      const projects = await CMSGraphCLient(gql`${query}`);
      return Object.values(projects.allProjectItems);
    } if (type === 'Item') {
      const { projectItem } = await CMSGraphCLient(gql`${query}`);
      return {
        title: projectItem.projectTitle.charAt(0).toUpperCase()
        + projectItem.projectTitle.slice(1),
        link: projectItem.projectUrl,
        image: projectItem.projectImage.url,
        description: projectItem.projectDescription,
      };
    }
    return new Error('A valid type is required');
  },
  async getPaths(query) {
    const paths = await CMSGraphCLient(gql`${query}`);
    return Object.values(paths.allProjectItems).map((project) => ({
      params: { id: project.projectTitle },
    }));
  },
};

export default projectService;
