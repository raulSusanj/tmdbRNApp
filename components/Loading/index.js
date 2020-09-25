/**
 * @format
 * @flow strict-local
 */
import React from 'react';
import { SafeAreaView, ActivityIndicator } from 'react-native';
import { global, colors } from '../../style';

export const Loading = ({ color }) => {
  return (
    <SafeAreaView
      style={[global.container, global.alignCenter, global.justifyCenter]}>
      <ActivityIndicator size="large" color={color} />
    </SafeAreaView>
  );
};

Loading.defaultProps = {
  color: colors.primary,
};
