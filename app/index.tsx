import * as React from 'react';
import { registerRootComponent } from 'expo';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import OnBoard1 from '@/app/screens/onBoard/onBoard1';
import OnBoard from '@/app/screens/onBoard/onBoard';

export default function Index() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="OnBoard" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="OnBoard" component={OnBoard} />
        <Stack.Screen name="OnBoard1" component={OnBoard1} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

registerRootComponent(Index);
