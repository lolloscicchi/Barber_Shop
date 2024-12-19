import { View, Text } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function HomePage() {
  return (
      <View
        style={{
          backgroundColor: '#363062',
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text>HOME PAGE</Text>
      </View>
  );
}
