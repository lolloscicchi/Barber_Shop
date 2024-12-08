import { Image, Text, View } from 'react-native';
import VerticalLogo from '@/components/molecules/verticalLogo/verticalLogo.molecule';

export default function OnBoard() {
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
