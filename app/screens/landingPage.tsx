import { View } from 'react-native';
import VerticalLogo from '@/components/molecules/verticalLogo/verticalLogo.molecule';
import { useEffect } from 'react';

export default function LandingPage({ navigation }) {
  useEffect(() => {
    // Imposta un timeout per eseguire la navigazione dopo 3 secondi (3000 ms)
    const timeout = setTimeout(() => {
      navigation.navigate('OnBoard');
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);
  return (
    <View
      style={{
        backgroundColor: '#363062',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <VerticalLogo />
    </View>
  );
}
