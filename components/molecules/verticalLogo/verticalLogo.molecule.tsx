import { Image, View, Text } from 'react-native';
import { memo } from 'react';
import { styles } from './verticalLogo.styles';

const VerticalLogo = () => {
  return (
    <View style={{ alignItems: 'center' }}>
      <Image
        style={styles.image}
        source={require('../../../assets/images/appImages/logo.png')}
        alt={'image not found'}
      />
      <Text style={styles.text}>Gobar</Text>
    </View>
  );
};

export default memo(VerticalLogo);
