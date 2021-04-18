/* eslint-disable react/prop-types */
/* eslint-disable react/forbid-prop-types */
import React from 'react';
import Box from '../foundation/Box';
import Card from '../common/Card';
import Text from '../foundation/Text';

export default function AboutScreen({
  title, image, description, repositories,
}) {
  return (
    <>
      <Box
        display="flex"
        flexDirection={{ xs: 'column' }}
        justifyContent={{ xs: 'center', md: 'space-between' }}
        alignItems="center"
        width="80%"
      >

        <Text tag="h2" mobile="subtitleXS" desktop="subtitleMD">
          {title && title}
        </Text>
        <Card.Image
          style={{ width: '8rem' }}
          src={image && image}
          alt="logo about me"
        />
        <Card.Text tag="p" mobile="paragraphXS" desktop="paragraphMD">
          {description && description}
        </Card.Text>
        <Card.Title tag="h2" mobile="subtitleXS" desktop="subtitleMD">
          My repositories
        </Card.Title>
        <Box as="ul" paddingLeft="0" marginBottom="3rem">
          {repositories && (Object.values(repositories).map((repository) => (
            <Box as="li" key={repository.name} listStyle="none" textAlign="center">
              <Text style={{ fontWeight: 'bold' }} tag="h3" mobile="paragraphXS" desktop="paragraphMD">
                {repository.name}
              </Text>
              <Card.Text>
                <Text href={repository.html_url} mobile="paragraphXS" desktop="paragraphMD">
                  {repository.html_url}
                </Text>
              </Card.Text>
            </Box>
          )))}
        </Box>
      </Box>
    </>
  );
}
