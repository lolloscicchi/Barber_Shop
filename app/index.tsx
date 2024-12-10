import * as React from 'react';
import { registerRootComponent } from 'expo';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import OnBoard from '@/app/screens/onBoard/onBoard';
import LandingPage from '@/app/screens/landingPage';
import HomePage from '@/app/screens/home/homePage';
import Login from '@/app/screens/login/login'

export default function Index() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LandingPage" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="LandingPage" component={LandingPage} />
        <Stack.Screen name="OnBoard" component={OnBoard} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="HomePage" component={HomePage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

registerRootComponent(Index);
