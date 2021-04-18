import React from 'react';
import PropTypes from 'prop-types';
import Capa from '../common/Capa';
import Projects from '../common/Projects';

export default function HomeScreen({ projects }) {
  return (
    <>
      <Capa />
      <Projects projects={projects} />
    </>
  );
}
HomeScreen.propTypes = {
  projects: PropTypes.arrayOf(PropTypes.shape({
    projectDescription: PropTypes.string.isRequired,
    projectImage: PropTypes.shape({
      url: PropTypes.string.isRequired,
    }).isRequired,
    projectTitle: PropTypes.string.isRequired,
    projectUrl: PropTypes.string.isRequired,
  })).isRequired,
};
