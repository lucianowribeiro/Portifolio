/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import NextLink from 'next/link';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const LinkStyle = styled.a`
  & {
    color: ${({ theme }) => theme.colors.primary.main.color};
    text-underline-position: under;
  }
  &:hover {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.primary.main.contrast};
    transition: ${({ theme }) => theme.transition};
  }
`;

export default function Link({ children, href, ...props }) {
  return (
    <NextLink href={href} passHref>
      <LinkStyle {...props}>
        {children}
      </LinkStyle>
    </NextLink>
  );
}

Link.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
