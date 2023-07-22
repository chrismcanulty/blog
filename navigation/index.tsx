import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  NavigationContainer,
  DarkTheme,
  DefaultTheme,
} from '@react-navigation/native';
import {ColorSchemeName} from 'react-native';
import IndexScreen from '../src/screens/IndexScreen';
import ShowScreen from '../src/screens/ShowScreen';

export default function Navigation({
  colorScheme,
}: {
  colorScheme: ColorSchemeName;
}) {
  return (
    <NavigationContainer
      theme={colorScheme === 'light' ? DefaultTheme : DarkTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

const Stack = createNativeStackNavigator();

function RootNavigator() {
  return (
    <Stack.Navigator initialRouteName="Index">
      <Stack.Group>
        <Stack.Screen
          name="Root"
          component={IndexScreen}
          options={{title: ''}}
        />
        <Stack.Screen
          name="Show"
          component={ShowScreen}
          options={{title: ''}}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
}
