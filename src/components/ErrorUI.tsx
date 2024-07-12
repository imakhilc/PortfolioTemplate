import React from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import CustomText from './CustomText';
import ic_error from '../assets/ic_error.webp';
import {normalize} from '../helpers/utils';
import { COLORS } from '../helpers/constants';

type PropType = {
  title: string;
  button?: string;
  call: () => void;
};

const ErrorUI: React.FC<PropType> = ({title, button, call}) => (
  <View style={styles.container}>
    <Image style={styles.ic_error} source={ic_error} />
    <CustomText weight={'bold'} size={'medium'} text={title} />
    {!!button && (
      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.reloadButton}
        onPress={call}>
        <CustomText weight={'bold'} size={'medium'} text={button} />
      </TouchableOpacity>
    )}
  </View>
);

export default ErrorUI;

const {height} = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    height,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ic_error: {
    height: normalize(120),
    width: normalize(120),
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: normalize(24),
  },
  reloadButton: {
    paddingHorizontal: normalize(24),
    paddingVertical: normalize(12),
    backgroundColor: COLORS.primaryLight,
    marginTop: normalize(12),
    borderRadius: normalize(8),
  },
});
