import { Image, ImageBackground, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StyleSheet } from 'react-native';
import OnBoardContainer from '@/components/molecules/onBoardContainer/onBoardContainer.molecule';

export default function OnBoard1() {
  return (
    <SafeAreaProvider>
      <ImageBackground
        source={require('../../assets/images/appImages/onBoard1.png')}
        resizeMode="contain"
        style={{ flex: 1, justifyContent: 'flex-end' }}>
        <OnBoardContainer
          title={'Welcome Gobars'}
          description={
            "Find the best grooming experience in your city with just one tap! Don't miss out on the haircut or treatment of your dreams. Let's start now!"
          }
        />
      </ImageBackground>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {},
});
