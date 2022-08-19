import React from 'react';
import HomeScreen from './HomeScreen';
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import WriteScreen from './WriteScreen';
import DetailScreen from './DetailScreen';

const Stack = createNativeStackNavigator();

export type Props = NativeStackScreenProps<any>;

const AppNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="HomeScreen">
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="WriteScreen" component={WriteScreen} />
      <Stack.Screen name="DetailScreen" component={DetailScreen} />
    </Stack.Navigator>
  );
};

export default AppNavigation;
