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
  projects: PropTypes.arrayOf({
    name: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};
