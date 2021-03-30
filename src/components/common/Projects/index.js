import React from 'react';
import WrapperProjects from './style/WrapperProjects';
import Card from '../Card';
import Text from '../../foundation/Text';
import Link from '../../foundation/Link';
import db from '../../../../public/db.json';

export default function Projects() {
  const { projects } = db;
  return (
    <WrapperProjects>
      <WrapperProjects.SectionTitle>
        <Text tag="h2" mobile="subTitleXS" desktop="subTitleMD">
          My Projects
        </Text>
      </WrapperProjects.SectionTitle>
      <WrapperProjects.SectionCard>
        {projects.map((project) => (
          <Card key={project.name} as={Link} href={project.link}>
            <Card.Title tag="h3" mobile="subTitleXS" desktop="subTitleMD">
              {project.title}
            </Card.Title>
            <Card.Image src={project.image} alt="card image" />
            <Card.Text tag="p" mobile="paragraphXS" desktop="paragraphMD">
              {project.description}
            </Card.Text>
          </Card>
        ))}
      </WrapperProjects.SectionCard>
    </WrapperProjects>
  );
}
