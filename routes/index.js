// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { colors } from '../style';
import { Logo } from '../components';
import Home from './Home';
import Detail from './Detail';

const Stack = createStackNavigator();

const headerOptions = {
  headerTitle: (props) => <Logo />,
  headerStyle: {
    backgroundColor: colors.primary,
  },
  headerTintColor: 'white',
  headerBackTitleVisible: false,
};

export const MainNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={headerOptions} />
        <Stack.Screen
          name="Detail"
          component={Detail}
          options={headerOptions}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
