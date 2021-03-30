/* eslint-disable react/prop-types */
/* eslint-disable react/forbid-prop-types */
import React from 'react';
import Box from '../foundation/Box';
import Card from '../common/Card';
import Text from '../foundation/Text';

export default function AboutScreen({ repositories }) {
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
          About me
        </Text>
        <Card.Image
          style={{ width: '8rem' }}
          src="/images/logo.jpeg"
          alt="logo about me"
        />
        <Card.Text tag="p" mobile="paragraphXS" desktop="paragraphMD">
          Nostrud consectetur reprehenderit do laborum aliquip non officia duis
          et est tempor enim fugiat fugiat. Commodo fugiat magna deserunt
          aliquip enim mollit qui labore pariatur. Deserunt eiusmod quis tempor
          dolore velit Lorem officia nulla deserunt elit duis aliqua
          exercitation quis. Velit occaecat qui voluptate sit eiusmod
          reprehenderit reprehenderit reprehenderit. Pariatur laborum cillum qui
        </Card.Text>
        <Card.Title tag="h2" mobile="subtitleXS" desktop="subtitleMD">
          My repositories
        </Card.Title>
        <Box as="ul" paddingLeft="0" marginBottom="3rem">
          {Object.values(repositories).map((repository) => (
            <Box as="li" listStyle="none" textAlign="center" key={repository.url}>
              <Text style={{ fontWeight: 'bold' }} tag="h3" mobile="paragraphXS" desktop="paragraphMD">
                {repository.name}
              </Text>
              <Card.Text>
                <Text href={repository.html_url} mobile="paragraphXS" desktop="paragraphMD">
                  {repository.html_url}
                </Text>
              </Card.Text>
            </Box>
          ))}
        </Box>
      </Box>
    </>
  );
}
