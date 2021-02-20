import React from 'react';
import WrapperProjects from './style/WrapperProjects';
import Card from '../Card';
import Text from '../../foundation/Text';

export default function Projects() {
  const projects = [
    {
      url: 'https://instalura.lucianowribeiro.vercel.app/',
      image: 'https://raw.githubusercontent.com/lucianowribeiro/instalura/aula9/instalura.png',
      title: 'Instalura',
      text:
        'Project done during the Alura Bootcamp JamStack using React | NextJS | StyledComponents | Styled-normalize | Lodash | Prop-types',
    },
    {
      url: 'https://sotc-quiz.vercel.app/',
      image: 'https://raw.githubusercontent.com/lucianowribeiro/sotc-quiz/main/_docs/capa.gif',
      title: 'Sotc-quiz',
      text:
          "Create my version of AluraQuiz in Alura'Imersão React Next.js inspired in Shadow of the Colossus game ",
    },
    {
      url: 'https://github.com/lucianowribeiro/difficulty',
      image: 'https://raw.githubusercontent.com/lucianowribeiro/difficulty/master/imgs/screen.gif',
      title: 'Difficulty',
      text:
          'A simple difficulty option screen using HTML | CSS | JS ',
    },
  ];
  return (
    <WrapperProjects>
      <WrapperProjects.SectionTitle>
        <Text as="h2" pattern="subTitleXS" variant="subTitleMD">My Projects</Text>
      </WrapperProjects.SectionTitle>
      <WrapperProjects.SectionCard>
        {projects.map((project) => (
          <Card key={project.image} href={project.url} rel="noreferrer" target="_blank">
            <Card.Title><Text as="h3" pattern="subTitleXS" variant="subTitleMD">{project.title}</Text></Card.Title>
            <Card.Image src={project.image} alt="card image" />
            <Card.Text><Text as="p" pattern="paragraphXS" variant="paragraphMD">{project.text}</Text></Card.Text>
          </Card>
        ))}
      </WrapperProjects.SectionCard>
    </WrapperProjects>
  );
}
