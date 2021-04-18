import React from 'react';
import PropTypes from 'prop-types';
import Card from '../common/Card';
import Link from '../foundation/Link';
import Box from '../foundation/Box';

export default function AboutScreen({
  title, link, image, description,
}) {
  return (
    <>
      <Card.Title tag="h3" mobile="subTitleXS" desktop="subTitleMD">
        {title}
      </Card.Title>
      <Box width="80%" display="flex" flexDirection={{ xs: 'column', md: 'row' }} alignItems={{ xs: 'center ', md: 'space-around' }}>
        <Box width={{ xs: '100%', md: '50%' }} display="flex" justifyContent="center" alignItems="center">
          <Card.Image style={{ width: '90%' }} src={image} alt="card image" />
        </Box>
        <Box width={{ xs: '100%', md: '50%' }} display="flex" flexDirection="column" justifyContent="center" alignItems="center">
          <Card.Text
            tag="p"
            mobile="paragraphXS"
            desktop="paragraphMD"
          >
            {description}
          </Card.Text>
          <Card.Text tag="p" style={{ fontWeight: 'bold' }} mobile="paragraphXS" desktop="paragraphMD">
            Visit the web site or github page
          </Card.Text>
          <Card.Text tag="p" as={Link} href={link} rel="noreferrer" target="_blank" mobile="paragraphXS" desktop="paragraphMD">
            {link}
          </Card.Text>
        </Box>
      </Box>
    </>
  );
}
AboutScreen.propTypes = {
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
