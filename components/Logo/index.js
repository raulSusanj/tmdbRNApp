/**
 * @format
 * @flow strict-local
 */

import React from 'react';
import { SvgCssUri } from 'react-native-svg';

export const Logo = (props: Props) => {
  const { width, height, logoUri } = props;
  return <SvgCssUri width={width} height={height} uri={logoUri} />;
};

type Props = {
  width: string,
  height: string,
  logoUri: string,
};

Logo.defaultProps = {
  width: '143',
  height: '35',
  logoUri:
    'https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg',
};
