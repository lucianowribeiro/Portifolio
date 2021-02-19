import styled from "styled-components";
import WrapperProjects from "./style/WrapperProjects";
import Card from "../Card";
export default function Projects() {
  const projects = [
    {
      image: "./images/projects/instalura.png",
      title: "Instalura",
      text:
        "Project done during the Alura Bootcamp JamStack using HTML | CSS | Js | React | NextJS | StyledComponents | Styled-normalize | Lodash | Prop-types",
    },
    {
        image: "./images/projects/instalura.png",
        title: "Instalura",
        text:
          "Project done during the Alura Bootcamp JamStack using HTML | CSS | Js | React | NextJS | StyledComponents | Styled-normalize | Lodash | Prop-types",
    },
    {
        image: "./images/projects/instalura.png",
        title: "Instalura",
        text:
          "Project done during the Alura Bootcamp JamStack using HTML | CSS | Js | React | NextJS | StyledComponents | Styled-normalize | Lodash | Prop-types",
    },
  ];
  return (
    <WrapperProjects>
      <WrapperProjects.SectionTitle>
        <h2>My Projects</h2>
      </WrapperProjects.SectionTitle>
      <WrapperProjects.SectionCard>
        {projects.map((project) => {
            return (
            <Card onClick={(click)=> click = true}>
                <Card.Title>{project.title}</Card.Title>
                <Card.Image src={project.image} alt="card image" />
                <Card.Text>{project.text}</Card.Text>
            </Card>
            )})}
       </WrapperProjects.SectionCard>
    </WrapperProjects>
   )
}
