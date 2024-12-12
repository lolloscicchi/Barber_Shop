import { styles } from '@/components/molecules/verticalLogo/verticalLogo.styles';
import { View, Text, ImageBackground, Image } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function Login() {
  return (
    <SafeAreaProvider>
      <ImageBackground
        style={{
          backgroundColor: '#F99417',
          flex: 1,
          alignItems: 'center',
          justifyContent: 'flex-end',
          paddingTop: 0,
        }}
        source={require('@/assets/images/appImages/background/backgroundIcons.png')}
        resizeMode="cover">
        <Image
          style={{ flex: 1, width: 200 }}
          source={require('@/assets/images/appImages/login/loginBarber.png')}
        />
        <View style={{ flex: 2, backgroundColor: 'white', width: '100%' }}>
          <Text>LOGIN</Text>
        </View>
      </ImageBackground>
    </SafeAreaProvider>
  );
}
