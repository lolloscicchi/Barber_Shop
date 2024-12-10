import { styles } from '@/components/molecules/verticalLogo/verticalLogo.styles';
import { View, Text, ImageBackground } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function Login() {
  return (
    <SafeAreaProvider>
        <ImageBackground style={{
          backgroundColor: '#F99417',
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          paddingTop:0
        }} source={require("@/assets/images/appImages/background/backgroundIcons.png")} resizeMode='contain' >
      
        <Text>LOGIN</Text>
      </ImageBackground>
    </SafeAreaProvider>
  );
}
