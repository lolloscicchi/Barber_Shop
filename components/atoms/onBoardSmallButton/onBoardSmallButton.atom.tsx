import { TouchableOpacity } from 'react-native';
import { StyleSheet } from 'react-native';
import { memo } from 'react';

interface OnBoardSmallButtonProp {
  isPressed: boolean;
  onPress: () => void;
}

const OnBoardSmallButton = ({ isPressed, onPress }: OnBoardSmallButtonProp) => {
  return (
    <TouchableOpacity
      style={isPressed ? styles.pressed : styles.notPressed}
      onPress={onPress}
      activeOpacity={0.8}
    />
  );
};

const styles = StyleSheet.create({
  pressed: {
    backgroundColor: '#363062',
    width: 28,
    height: 10,
    borderRadius: 10,
    marginHorizontal: 8,
  },
  notPressed: {
    backgroundColor: 'white',
    width: 10,
    height: 10,
    borderRadius: 10,
    marginHorizontal: 8,
  },
});

export default memo(OnBoardSmallButton);
