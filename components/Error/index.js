/**
 * @format
 * @flow strict-local
 */
import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import { global, fonts, colors } from '../../style';

export const Error = ({ color }) => {
  return (
    <SafeAreaView
      style={[global.container, global.alignCenter, global.justifyCenter]}>
      <Text style={[fonts.title, { color: colors.error }]}>
        Oops, an error accured
      </Text>
      <Text style={[fonts.title, { color: colors.error }]}>
        Please try later
      </Text>
    </SafeAreaView>
  );
};

Error.defaultProps = {
  color: colors.primary,
};
