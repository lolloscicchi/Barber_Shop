import * as React from 'react';
import { registerRootComponent } from 'expo';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import OnBoardScreen from '@/app/screens/onBoard/onBoard.screen';
import LandingPage from '@/app/screens/landingPage';
import HomePage from '@/app/screens/home/homePage.screen';
import Login from '@/app/screens/login/login.screen';
import OnBoard from '@/app/screens/onBoard/onBoard.screen';
import { SafeAreaView } from 'react-native';

export default function Index() {
  const Stack = createNativeStackNavigator();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor:'#F99417' }}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="LandingPage" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="LandingPage" component={LandingPage} />
          <Stack.Screen name="OnBoard" component={OnBoard} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="HomePage" component={HomePage} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

registerRootComponent(Index);
