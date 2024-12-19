import { View, Text, ImageBackground, Image, SafeAreaView } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { styles } from '@/app/screens/login/login.styles';

export default function Login() {
  return (
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
          style={{ flex:1 }}
          source={require('@/assets/images/appImages/login/loginBarber.png')}
        />
        <View style={{ flex: 2, backgroundColor: 'white', width: '100%' }}>
          <Text>LOGIN</Text>
        </View>
      </ImageBackground>
  );
}
