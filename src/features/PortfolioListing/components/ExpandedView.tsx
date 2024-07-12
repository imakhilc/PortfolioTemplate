import React, {useEffect, useRef, useState} from 'react';
import {
  Animated,
  Easing,
  LayoutChangeEvent,
  StyleSheet,
  View,
} from 'react-native';
import {normalize, roundOff} from '../../../helpers/utils';
import {COLORS, STRINGS} from '../../../helpers/constants';
import CustomText from '../../../components/CustomText';

type PropType = {
  expanded: boolean;
  currentValue: number;
  investmentValue: number;
  profitAndLoss: number;
  totalCurrentValue?: number;
  totalInvestment?: number;
  totalPnL?: number;
  todayPnL?: number;
};

const ExpandedView: React.FC<PropType> = ({
  expanded,
  currentValue,
  investmentValue,
  profitAndLoss,
  totalCurrentValue,
  totalInvestment,
  totalPnL,
  todayPnL,
}) => {
  const [height, setHeight] = useState(0);
  const viewHeight = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    const toValue = expanded ? normalize(height) : 0;
    Animated.timing(viewHeight, {
      toValue,
      duration: 200,
      easing: Easing.linear,
      useNativeDriver: false,
    }).start();
  }, [expanded, viewHeight, height]);

  function infoItem(title: string, value?: number) {
    return (
      <View style={styles.row}>
        <CustomText weight={'regular'} size={'small'} text={`${title}:`} />
        <CustomText
          weight={'regular'}
          size={'small'}
          text={`${STRINGS.rupee}${roundOff(value)}`}
        />
      </View>
    );
  }

  function onLayout(event: LayoutChangeEvent) {
    const layoutHeight = event.nativeEvent.layout.height;
    if (layoutHeight > 0 && layoutHeight !== height) {
      setHeight(layoutHeight - normalize(24));
    }
  }

  return (
    <Animated.View style={[{height: viewHeight}]}>
      <View onLayout={onLayout} style={styles.expandedContainer}>
        {infoItem(STRINGS.currentV, currentValue)}
        {infoItem(STRINGS.invValue, investmentValue)}
        {infoItem(STRINGS.pAndLoss, profitAndLoss)}
        <View style={styles.divider} />
        {infoItem(STRINGS.totalcurrent, totalCurrentValue)}
        {infoItem(STRINGS.totalInv, totalInvestment)}
        {infoItem(STRINGS.totalPnL, totalPnL)}
        {infoItem(STRINGS.todayPAndLoss, todayPnL)}
      </View>
    </Animated.View>
  );
};

export default ExpandedView;

const styles = StyleSheet.create({
  expandedContainer: {
    left: 0,
    right: 0,
    top: normalize(1),
    backgroundColor: COLORS.darkest,
    paddingTop: normalize(16),
    paddingBottom: normalize(8),
    paddingHorizontal: normalize(16),
    position: 'absolute',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: normalize(12),
    height: normalize(20),
  },
  divider: {
    height: normalize(1),
    width: '100%',
    backgroundColor: 'gray',
    marginBottom: normalize(12),
  },
});
