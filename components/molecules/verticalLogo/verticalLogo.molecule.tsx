import { Image, View, Text } from 'react-native';
import { memo } from 'react';

const VerticalLogo = () => {
  return (
    <View style={{ alignItems: 'center' }}>
      <Image
        style={{ width: 120, height: 120 }}
        source={require('../../../assets/images/appImages/logo.png')}
        alt={'image not found'}
      />
      <Text style={{ color: 'white', fontSize: 30, fontWeight: 'bold' }}>Gobar</Text>
    </View>
  );
};

export default memo(VerticalLogo);
