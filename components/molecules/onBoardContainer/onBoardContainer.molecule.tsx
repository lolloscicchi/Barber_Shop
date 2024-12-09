import { Text, TouchableOpacity, View } from 'react-native';
import { memo } from 'react';
import { useFonts } from 'expo-font';

import { fonts, fontStyles } from '@/app/fonts';

interface OnBoardContainerProps {
  title: string;
  description: string;
}

const OnBoardContainer = ({ title, description }: OnBoardContainerProps) => {
  let [fontsLoaded] = useFonts(fonts);

  if (!fontsLoaded) {
    return <Text>Caricamento dei font</Text>;
  } else {
    return (
      <View
        style={{
          width: '100%',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          backgroundColor: 'orange',
          borderTopEndRadius: 40,
          borderTopStartRadius: 40,
          paddingHorizontal: 20,
          paddingVertical: 40,
        }}>
        <View style={{ alignItems: 'flex-start' }}>
          <Text style={[{ color: 'white', fontSize: 24 }, fontStyles.semiBold]}>{title}</Text>
          <Text style={[{ color: 'white', fontSize: 14 }, fontStyles.regular]}>{description}</Text>
        </View>
        <TouchableOpacity
          style={{
            backgroundColor: 'purple',
            width: '100%',
            alignItems: 'center',
            padding: 10,
            borderRadius: 20,
          }}>
          <Text style={{ color: 'white', fontSize: 16 }}>Get Started!</Text>
        </TouchableOpacity>
      </View>
    );
  }
};

export default memo(OnBoardContainer);
