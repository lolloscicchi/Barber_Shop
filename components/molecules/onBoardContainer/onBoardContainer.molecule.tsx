import { Pressable, Text, TouchableOpacity, View } from 'react-native';
import { memo, useState } from 'react';
import { useFonts } from 'expo-font';

import { fonts, fontStyles } from '@/app/fonts';
import BigButton from '@/components/atoms/bigButton/bigButton.atom';

interface OnBoardContainerProps {
  titles: string[];
  descriptions: string[];
}

const OnBoardContainer = ({ titles, descriptions }: OnBoardContainerProps) => {
  let [fontsLoaded] = useFonts(fonts);
  const [selectedIndex, setSelectedIndex] = useState(0);
  if (!fontsLoaded) {
    return <Text>Caricamento dei font...</Text>;
  } else {
    return (
      <View
        style={{
          width: '100%',
          alignItems: 'center',
          justifyContent: 'space-between',
          backgroundColor: 'orange',
          borderTopEndRadius: 40,
          borderTopStartRadius: 40,
          paddingHorizontal: 20,
          paddingVertical: 24,
        }}>
        <View style={{ alignItems: 'flex-start', marginBottom: 18, width: '100%' }}>
          <Text style={[{ color: 'white', fontSize: 24, marginBottom: 8 }, fontStyles.semiBold]}>
            {titles[selectedIndex]}
          </Text>
          <Text style={[{ color: 'white', fontSize: 14 }, fontStyles.regular]}>
            {descriptions[selectedIndex]}
          </Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Pressable
            style={{
              backgroundColor: selectedIndex === 0 ? '#363062' : 'white',
              width: selectedIndex === 0 ? 28 : 10,
              height: 10,
              borderRadius: 10,
            }}
            onPress={() => setSelectedIndex(0)}
          />
          <Pressable
            style={{
              backgroundColor: selectedIndex === 1 ? '#363062' : 'white',
              width: selectedIndex === 1 ? 28 : 10,
              height: 10,
              borderRadius: 10,
              marginHorizontal: 8,
            }}
            onPress={() => setSelectedIndex(1)}
          />
          <Pressable
            style={{
              backgroundColor: selectedIndex === 2 ? '#363062' : 'white',
              width: selectedIndex === 2 ? 28 : 10,
              height: 10,
              borderRadius: 10,
            }}
            onPress={() => setSelectedIndex(2)}
          />
        </View>
        <View style={{ height: 18 }} />
        <BigButton title={'Get started!'} onPress={() => {}} />
      </View>
    );
  }
};

export default memo(OnBoardContainer);
