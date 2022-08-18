import React from 'react';
import HomeScreen from './HomeScreen';
import {
  createNativeStackNavigator,
  NativeStackHeaderProps,
} from '@react-navigation/native-stack';
import {Text, View} from 'react-native';
import WriteScreen from './WriteScreen';

const Stack = createNativeStackNavigator();

const Test = () => {
  return (
    <View style={{flex: 1, backgroundColor: 'pink', width: 400, height: 400}}>
      <Text>sdafasdfasfdssafd</Text>
    </View>
  );
};

export type Props = NativeStackHeaderProps;
// export type Props = NativeStackScreenProps<any>;

const AppNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="HomeScreen">
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="WriteScreen" component={WriteScreen} />

      <Stack.Screen name="Test" component={Test} />
    </Stack.Navigator>
  );
};

export default AppNavigation;
