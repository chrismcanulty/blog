import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  NavigationContainer,
  DarkTheme,
  DefaultTheme,
} from '@react-navigation/native';
import {ColorSchemeName, TouchableOpacity} from 'react-native';
import IndexScreen from '../src/screens/IndexScreen';
import ShowScreen from '../src/screens/ShowScreen';
import CreateScreen from '../src/screens/CreateScreen';
import PlusIcon from 'react-native-vector-icons/FontAwesome';

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

function HeaderButton({navigation}: any) {
  return (
    <TouchableOpacity onPress={() => navigation.navigate('Create')}>
      <PlusIcon name="plus" size={24} color="#900" />
    </TouchableOpacity>
  );
}

function RootNavigator() {
  return (
    <Stack.Navigator initialRouteName="Index">
      <Stack.Group>
        <Stack.Screen
          name="Root"
          component={IndexScreen}
          options={({navigation}) => ({
            title: '',
            headerRight: () => HeaderButton({navigation}),
          })}
        />
        <Stack.Screen
          name="Show"
          component={ShowScreen}
          options={{title: ''}}
        />
        <Stack.Screen
          name="Create"
          component={CreateScreen}
          options={{title: ''}}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
}
