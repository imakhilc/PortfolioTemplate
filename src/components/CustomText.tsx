import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {COLORS, FONT_SIZE} from '../helpers/constants';
import {SizeType} from '../features/PortfolioListing/utils/types';

type PropType = {
  text: string | number;
  weight?: any;
  size: SizeType;
  color?: string;
};

const CustomText: React.FC<PropType> = ({
  text,
  weight = 'regular',
  size = 'medium',
  color,
}) => {
  const fontSize = FONT_SIZE[size];
  return (
    <Text
      style={[
        styles.title,
        {fontWeight: weight, fontSize, color: color || COLORS.light},
      ]}>
      {text}
    </Text>
  );
};

export default CustomText;

const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold',
  },
});
