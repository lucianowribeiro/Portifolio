const projectService = {
  forProjects(params, projects) {
    const dataPage = {
      name: '',
      image: '',
      title: '',
      description: '',
      link: '',
      url: '',
    };
    projects.forEach((project) => {
      if (project.name === params.id) {
        dataPage.name = project.name;
        dataPage.image = project.image;
        dataPage.title = project.title;
        dataPage.description = project.description;
        dataPage.link = project.link;
        dataPage.url = project.url;
      }
    });
    return dataPage;
  },
  mapPaths(projects) {
    return projects.map((project) => ({ params: { id: project.name } }));
  },
};
export default projectService;
