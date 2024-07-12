import React, {useState} from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import {HoldingItemType} from '../utils/types';
import CustomText from '../../../components/CustomText';
import {COLORS, STRINGS} from '../../../helpers/constants';
import {normalize, roundOff} from '../../../helpers/utils';
import ExpandedView from './ExpandedView';
import ic_arrow from '../../../assets/ic_arrow.webp';
import {getCurrentValues} from '../utils/utils';

type PropType = {
  item: HoldingItemType;
  totalCurrentValue?: number;
  totalInvestment?: number;
  totalPnL?: number;
  todayPnL?: number;
};

const PortfolioItem: React.FC<PropType> = ({
  item,
  totalCurrentValue,
  totalInvestment,
  totalPnL,
  todayPnL,
}) => {
  const [expanded, setExpanded] = useState(false);
  const {currentValue, investmentValue, profitAndLoss} = getCurrentValues(item);

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
        <View style={styles.rowWithArrow}>
          <View style={styles.flex1}>
            <View style={styles.row}>
              <CustomText weight={'bold'} size={'medium'} text={item.symbol} />
              <CustomText
                weight={'regular'}
                size={'small'}
                text={`${STRINGS.ltp}: ${STRINGS.rupee}${item.ltp}`}
              />
            </View>
            <View style={styles.row}>
              <CustomText
                weight={'regular'}
                size={'small'}
                text={item.quantity}
              />
              <CustomText
                weight={'regular'}
                size={'small'}
                text={`${STRINGS.pAndL}: ${STRINGS.rupee}${roundOff(
                  profitAndLoss,
                )}`}
              />
            </View>
          </View>
          <Image
            source={ic_arrow}
            style={[styles.arrow, expanded && styles.rotatedArrow]}
          />
        </View>
      </TouchableOpacity>
      {expanded && (
        <ExpandedView
          expanded={expanded}
          currentValue={currentValue}
          investmentValue={investmentValue}
          profitAndLoss={profitAndLoss}
          totalCurrentValue={totalCurrentValue}
          totalInvestment={totalInvestment}
          totalPnL={totalPnL}
          todayPnL={todayPnL}
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
  rowWithArrow: {
    flexDirection: 'row',
  },
  arrow: {
    height: normalize(24),
    width: normalize(24),
    tintColor: 'white',
    marginVertical: normalize(16),
    marginLeft: normalize(12),
    alignSelf: 'center',
  },
  rotatedArrow: {
    transform: [{rotate: '180deg'}],
  },
  flex1: {flex: 1},
});
