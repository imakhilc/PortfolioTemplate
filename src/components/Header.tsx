import React from 'react';
import {StyleSheet, View} from 'react-native';
import {normalize} from '../helpers/utils';
import CustomText from './CustomText';
import {COLORS} from '../helpers/constants';

type PropType = {
  title: string;
};

const Header: React.FC<PropType> = ({title}) => {
  return (
    <View style={styles.container}>
      <CustomText
        color={COLORS.light}
        weight={'bold'}
        size={'medium'}
        text={title}
      />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: normalize(24),
    paddingVertical: normalize(18),
    backgroundColor: COLORS.primaryDark,
  },
});
