import React from 'react';
import PropTypes from 'prop-types';
import WrapperProjects from './style/WrapperProjects';
import Card from '../Card';
import Link from '../../foundation/Link';
import Text from '../../foundation/Text';
import { WebPageContext } from '../../wrappers/WebPage';

export default function Projects({ projects }) {
  const webPage = React.useContext(WebPageContext);
  return (
    <WrapperProjects>
      <WrapperProjects.SectionTitle mode={webPage.themeMode}>
        <Text tag="h2" mobile="subTitleXS" desktop="subTitleMD">
          My Projects
        </Text>
      </WrapperProjects.SectionTitle>
      <WrapperProjects.SectionCard>
        {projects.map((project) => (
          <Card mode={webPage.themeMode} key={project.projectTitle} as={Link} href={`/projects/${project.projectTitle}`}>
            <Card.Title mode={webPage.themeMode} tag="h3" mobile="subTitleXS" desktop="subTitleMD">
              {project.projectTitle}
            </Card.Title>
            <Card.Image mode={webPage.themeMode} src={project.projectImage.url} alt="card image" />
            <Card.Text mode={webPage.themeMode} tag="p" mobile="paragraphXS" desktop="paragraphMD">
              {project.projectDescription}
            </Card.Text>
          </Card>
        ))}
      </WrapperProjects.SectionCard>
    </WrapperProjects>
  );
}
Projects.propTypes = {
  projects: PropTypes.arrayOf(PropTypes.shape({
    projectDescription: PropTypes.string.isRequired,
    projectImage: PropTypes.shape({
      url: PropTypes.string.isRequired,
    }).isRequired,
    projectTitle: PropTypes.string.isRequired,
    projectUrl: PropTypes.string.isRequired,
  })).isRequired,
};
