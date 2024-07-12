import React from 'react';
import {StyleSheet, View} from 'react-native';
import {normalize} from '../../../helpers/utils';
import {COLORS, STRINGS} from '../../../helpers/constants';
import CustomText from '../../../components/CustomText';

type PropType = {
  currentValue: number;
  totalInvestment: number;
  profitAndLoss: number;
};

const ExpandedView: React.FC<PropType> = ({
  currentValue,
  totalInvestment,
  profitAndLoss,
}) => {
  function infoItem(title: string, value: number) {
    return (
      <View style={styles.row}>
        <CustomText weight={'regular'} size={'small'} text={`${title}:`} />
        <CustomText
          weight={'regular'}
          size={'small'}
          text={`${STRINGS.rupee}${value}`}
        />
      </View>
    );
  }
  return (
    <View style={styles.expandedContainer}>
      {infoItem(STRINGS.currentV, currentValue)}
      {infoItem(STRINGS.totalInv, totalInvestment)}
      {/* {infoItem(STRINGS.todayPAndLoss)} */}
      {infoItem(STRINGS.pAndLoss, profitAndLoss)}
    </View>
  );
};

export default ExpandedView;

const styles = StyleSheet.create({
  expandedContainer: {
    backgroundColor: COLORS.darkest,
    paddingTop: normalize(16),
    paddingBottom: normalize(8),
    paddingHorizontal: normalize(16),
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: normalize(12),
  },
});
