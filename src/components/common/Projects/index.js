import React from 'react';
import PropTypes from 'prop-types';
import WrapperProjects from './style/WrapperProjects';
import Card from '../Card';
import Link from '../../foundation/Link';
import Text from '../../foundation/Text';

export default function Projects({ projects }) {
  return (
    <WrapperProjects>
      <WrapperProjects.SectionTitle>
        <Text tag="h2" mobile="subTitleXS" desktop="subTitleMD">
          My Projects
        </Text>
      </WrapperProjects.SectionTitle>
      <WrapperProjects.SectionCard>
        {projects.map((project) => (
          <Card key={project.projectTitle} as={Link} href={`/projects/${project.projectTitle}`}>
            <Card.Title tag="h3" mobile="subTitleXS" desktop="subTitleMD">
              {project.projectTitle}
            </Card.Title>
            <Card.Image src={project.projectImage.url} alt="card image" />
            <Card.Text tag="p" mobile="paragraphXS" desktop="paragraphMD">
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
