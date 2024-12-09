import { Pressable, Text, TouchableOpacity, View } from 'react-native';
import { memo, useState } from 'react';
import { useFonts } from 'expo-font';

import { fonts, fontStyles } from '@/app/fonts';
import BigButton from '@/components/atoms/bigButton/bigButton.atom';
import { NavigationProp } from '@react-navigation/core';

interface OnBoardContainerProps {
  titles: string[];
  descriptions: string[];
  switchView: number;
  onSelectView: (index: number) => void;
  onPress: () => void;
}

const OnBoardContainer = ({
  onPress,
  titles,
  descriptions,
  switchView,
  onSelectView,
}: OnBoardContainerProps) => {
  let [fontsLoaded] = useFonts(fonts);
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
            {titles[switchView]}
          </Text>
          <Text style={[{ color: 'white', fontSize: 14 }, fontStyles.regular]}>
            {descriptions[switchView]}
          </Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Pressable
            style={{
              backgroundColor: switchView === 0 ? '#363062' : 'white',
              width: switchView === 0 ? 28 : 10,
              height: 10,
              borderRadius: 10,
            }}
            onPress={() => onSelectView(0)}
          />
          <Pressable
            style={{
              backgroundColor: switchView === 1 ? '#363062' : 'white',
              width: switchView === 1 ? 28 : 10,
              height: 10,
              borderRadius: 10,
              marginHorizontal: 8,
            }}
            onPress={() => onSelectView(1)}
          />
          <Pressable
            style={{
              backgroundColor: switchView === 2 ? '#363062' : 'white',
              width: switchView === 2 ? 28 : 10,
              height: 10,
              borderRadius: 10,
            }}
            onPress={() => onSelectView(2)}
          />
        </View>
        <View style={{ height: 18 }} />
        <BigButton title={'Get started!'} onPress={onPress} />
      </View>
    );
  }
};

export default memo(OnBoardContainer);
