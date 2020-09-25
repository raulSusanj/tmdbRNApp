/**
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import { View, Text, StatusBar } from 'react-native';
import { global } from './style';
import { MainNavigator } from './routes';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <MainNavigator />
    </>
  );
};

export default App;
