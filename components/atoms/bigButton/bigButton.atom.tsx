import React, { memo } from 'react';
import { TouchableOpacity, Text, ViewStyle, TextStyle } from 'react-native';
import { styles } from '@/components/atoms/bigButton/bigButton.styles';

interface ButtonProps {
  title: string;
  disabled?: boolean;
  style?: ViewStyle;
  titleStyle?: TextStyle;
  activeOpacity?: number;
  onPress: () => void;
}
const BigButton = ({
  title,
  disabled = false,
  style,
  titleStyle,
  activeOpacity = 0.7,
  onPress,
}: ButtonProps) => {
  return (
    <TouchableOpacity
      activeOpacity={activeOpacity}
      style={[styles.container, style]}
      disabled={disabled}
      onPress={onPress}>
      <Text style={[styles.titleStyle, titleStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default memo(BigButton);
