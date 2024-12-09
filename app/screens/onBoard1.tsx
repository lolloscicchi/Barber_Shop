import { Image, ImageBackground, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function OnBoard1() {
  return (
    <SafeAreaProvider>
      <ImageBackground
        source={require('../../assets/images/appImages/onBoard1.png')}
        resizeMode="contain"
        style={{ flex: 1, justifyContent: 'flex-end' }}>
        <View
          style={{
            height: 250,
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'orange',
            borderTopEndRadius: 40,
            borderTopStartRadius: 40,
            padding: 20,
          }}>
          <TouchableOpacity
            style={{
              backgroundColor: 'purple',
              width: '100%',
              alignItems: 'center',
              padding: 10,
              borderRadius: 20,
            }}>
            <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 25 }}>Get Started!</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </SafeAreaProvider>
  );
}
