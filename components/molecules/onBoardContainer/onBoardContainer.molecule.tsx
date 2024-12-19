import { Text, View } from 'react-native';
import { memo } from 'react';
import { useFonts } from 'expo-font';

import { fonts, fontStyles } from '@/assets/fonts/fonts';
import BigButton from '@/components/atoms/bigButton/bigButton.atom';
import { NavigationProp } from '@react-navigation/core';
import OnBoardSmallButton from '@/components/atoms/onBoardSmallButton/onBoardSmallButton.atom';

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
          backgroundColor: '#F99417',
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
          <OnBoardSmallButton isPressed={switchView === 0} onPress={() => onSelectView(0)} />
          <OnBoardSmallButton isPressed={switchView === 1} onPress={() => onSelectView(1)} />
          <OnBoardSmallButton isPressed={switchView === 2} onPress={() => onSelectView(2)} />
        </View>
        <View style={{ height: 18 }} />
        <BigButton title={'Get started!'} onPress={onPress} />
      </View>
    );
  }
};

export default memo(OnBoardContainer);
