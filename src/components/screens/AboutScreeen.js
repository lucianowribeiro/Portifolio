/* eslint-disable react/prop-types */
/* eslint-disable react/forbid-prop-types */
import React from 'react';
import Box from '../foundation/Box';
import Card from '../common/Card';
import Text from '../foundation/Text';
import { WebPageContext } from '../wrappers/WebPage';
import WrapperProjects from '../common/Projects/style/WrapperProjects';

export default function AboutScreen({
  title,
  image,
  description,
  repositories,
}) {
  const webPage = React.useContext(WebPageContext);
  return (
    <>
      <Box
        display="flex"
        flexDirection={{ xs: 'column' }}
        justifyContent={{ xs: 'center', md: 'space-between' }}
        alignItems="center"
        width="80%"
      >
        <WrapperProjects.SectionTitle mode={webPage.themeMode}>
          <Text tag="h2" mobile="subTitleXS" desktop="subTitleMD">
            {title}
          </Text>
        </WrapperProjects.SectionTitle>
        <Card.Image style={{ width: '8rem' }} src={image} alt="logo about me" />
        <Card.Text
          mode={webPage.themeMode}
          tag="p"
          mobile="paragraphXS"
          desktop="paragraphMD"
        >
          {description}
        </Card.Text>
        <Card.Title
          mode={webPage.themeMode}
          tag="h2"
          mobile="subTitleXS"
          desktop="subTitleMD"
        >
          My repositories
        </Card.Title>
        <Box as="ul" paddingLeft="0" marginBottom="3rem">
          {repositories
            && Object.values(repositories).map((repository) => (
              <Box
                as="li"
                key={repository.name}
                listStyle="none"
                display="flex"
                flexDirection="column"
                alignItems={{ xs: 'left', md: 'center' }}
              >
                <Card.Text
                  mode={webPage.themeMode}
                  style={{ fontWeight: 'bold' }}
                  tag="h3"
                  mobile="paragraphXS"
                  desktop="paragraphMD"
                >
                  {repository.name}
                </Card.Text>
                <Card.Text
                  mode={webPage.themeMode}
                  href={repository.html_url}
                  mobile="paragraphXS"
                  desktop="paragraphMD"
                >
                  {repository.html_url}
                </Card.Text>
              </Box>
            ))}
        </Box>
      </Box>
    </>
  );
}
