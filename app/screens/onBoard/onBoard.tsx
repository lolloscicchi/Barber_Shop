import { Image, ImageBackground, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StyleSheet } from 'react-native';
import OnBoardContainer from '@/components/molecules/onBoardContainer/onBoardContainer.molecule';
import { useState } from 'react';

export default function OnBoard() {
  // testi dei titoli e delle descrizioni da renderizzare alla pressione dei pulsanti
  const titles = ['Welcome Gobars', 'Loooking for barber?', 'Everything in your hands'];
  const descriptions = [
    "Find the best grooming experience in your city with just one tap! Don't miss out on the haircut or treatment of your dreams. Let's start now!",
    'Find the best barbershop around you in seconds, make an appointment, and enjoy the best grooming experience.',
    'With Gobar, find high-quality barbershops, see reviews, and make appointments easily. Achieve your confident appearance!',
  ];
  const [selectedIndex, setSelectedIndex] = useState(0);
  const onBoardImages = [
    require('../../../assets/images/appImages/onBoard/onBoard1.png'),
    require('../../../assets/images/appImages/onBoard/onBoard2.png'),
    require('../../../assets/images/appImages/onBoard/onBoard3.png'),
  ];
  return (
    <SafeAreaProvider>
      <ImageBackground
        source={onBoardImages[selectedIndex]}
        resizeMode="contain"
        style={{ flex: 1, justifyContent: 'flex-end' }}>
        {/*l'unico contenitore della schermata, ovvero quello arancione*/}
        <OnBoardContainer
          titles={titles}
          descriptions={descriptions}
          switchView={selectedIndex}
          onSelectView={setSelectedIndex}
        />
      </ImageBackground>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {},
});
