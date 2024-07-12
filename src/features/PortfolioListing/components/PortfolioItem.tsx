import React, {useState} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {HoldingItemType} from '../utils/types';
import CustomText from '../../../components/CustomText';
import {COLORS, STRINGS} from '../../../helpers/constants';
import {normalize, roundOff} from '../../../helpers/utils';
import ExpandedView from './ExpandedView';

type PropType = {
  item: HoldingItemType;
};

const PortfolioItem: React.FC<PropType> = ({item}) => {
  const [expanded, setExpanded] = useState(false);
  const currentValue = item.ltp * item.quantity;
  const investmentValue = item.avgPrice * item.quantity;
  const profitAndLoss = currentValue - investmentValue;

  function changeExpandedState() {
    setExpanded(state => !state);
  }

  return (
    <View>
      <TouchableOpacity
        onPress={changeExpandedState}
        activeOpacity={1}
        key={item.symbol}
        style={styles.buttonContainer}>
        <View style={styles.row}>
          <CustomText weight={'bold'} size={'medium'} text={item.symbol} />
          <CustomText
            weight={'regular'}
            size={'small'}
            text={`${STRINGS.ltp}: ${STRINGS.rupee}${item.ltp}`}
          />
        </View>
        <View style={styles.row}>
          <CustomText weight={'regular'} size={'small'} text={item.quantity} />
          <CustomText
            weight={'regular'}
            size={'small'}
            text={`${STRINGS.pAndL}: ${STRINGS.rupee}${roundOff(
              profitAndLoss,
            )}`}
          />
        </View>
      </TouchableOpacity>
      {expanded && (
        <ExpandedView
          expanded={expanded}
          currentValue={currentValue}
          totalInvestment={investmentValue}
          profitAndLoss={profitAndLoss}
        />
      )}
    </View>
  );
};

export default PortfolioItem;

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: COLORS.dark,
    paddingHorizontal: normalize(16),
    paddingTop: normalize(8),
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: normalize(12),
  },
});
