/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import breakpointsMedia from '../../../theme/utils/breakpointsMedia';
import Link from '../Link';

export const TextStyleMap = {
  titleXS: css`
    font-size: ${({ theme }) => theme.typographyVariants.titleXS.fontSize};
    font-weight: ${({ theme }) => theme.typographyVariants.titleXS.fontWeight};
    line-height: ${({ theme }) => theme.typographyVariants.titleXS.lineHeight};
  `,
  titleMD: css`
    font-size: ${({ theme }) => theme.typographyVariants.titleMD.fontSize};
    font-weight: ${({ theme }) => theme.typographyVariants.titleMD.fontWeight};
    line-height: ${({ theme }) => theme.typographyVariants.titleMD.lineHeight};
  `,
  subTitleXS: css`
    font-size: ${({ theme }) => theme.typographyVariants.subTitleXS.fontSize};
    font-weight: ${({ theme }) => theme.typographyVariants.subTitleXS.fontWeight};
    line-height: ${({ theme }) => theme.typographyVariants.subTitleXS.lineHeight};
  `,
  subTitleMD: css`
    font-size: ${({ theme }) => theme.typographyVariants.subTitleMD.fontSize};
    font-weight: ${({ theme }) => theme.typographyVariants.subTitleMD.fontWeight};
    line-height: ${({ theme }) => theme.typographyVariants.subTitleMD.lineHeight};
  `,
  menuXS: css`
    font-size: ${({ theme }) => theme.typographyVariants.menuXS.fontSize};
    font-weight: ${({ theme }) => theme.typographyVariants.menuXS.fontWeight};
    line-height: ${({ theme }) => theme.typographyVariants.menuXS.lineHeight};
  `,
  menuMD: css`
    font-size: ${({ theme }) => theme.typographyVariants.menuMD.fontSize};
    font-weight: ${({ theme }) => theme.typographyVariants.menuMD.fontWeight};
    line-height: ${({ theme }) => theme.typographyVariants.menuMD.lineHeight};
  `,
  paragraphXS: css`
    font-size: ${({ theme }) => theme.typographyVariants.paragraphXS.fontSize};
    font-weight: ${({ theme }) => theme.typographyVariants.paragraphXS.fontWeight};
    line-height: ${({ theme }) => theme.typographyVariants.paragraphXS.lineHeight};
  `,
  paragraphMD: css`
    font-size: ${({ theme }) => theme.typographyVariants.paragraphMD.fontSize};
    font-weight: ${({ theme }) => theme.typographyVariants.paragraphMD.fontWeight};
    line-height: ${({ theme }) => theme.typographyVariants.paragraphMD.lineHeight};
  `,
};
const TextBase = styled.span`
  ${breakpointsMedia({
    xs: (props) => TextStyleMap[props.mobile],
    md: (props) => TextStyleMap[props.desktop],
  })}
`;

export default function Text({
  tag, mobile, desktop, children, href, ...props
}) {
  if (href) {
    return (
      <TextBase as={Link} href={href} mobile={mobile} desktop={desktop} {...props}>
        {children}
      </TextBase>
    );
  }
  return (
    <TextBase as={tag} mobile={mobile} desktop={desktop} {...props}>
      {children}
    </TextBase>
  );
}

Text.propTypes = {
  tag: PropTypes.string,
  mobile: PropTypes.string,
  desktop: PropTypes.string,
  href: PropTypes.string,
  children: PropTypes.node,
};

Text.defaultProps = {
  tag: 'span',
  mobile: 'paragraphXS',
  desktop: 'paragraphMD',
  href: '',
  children: undefined,
};
