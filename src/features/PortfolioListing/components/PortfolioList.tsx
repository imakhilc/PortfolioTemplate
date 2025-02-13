import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {PortfolioDataType} from '../utils/types';
import PortfolioItem from './PortfolioItem';
import {normalize} from '../../../helpers/utils';
import {COLORS} from '../../../helpers/constants';
import {getTotalValues} from '../utils/utils';

type PropType = {
  loading: boolean;
  data: PortfolioDataType;
  initApiCall: () => void;
};

const PortfolioList: React.FC<PropType> = ({loading, data, initApiCall}) => {
  const list = data.response?.userHolding || [];
  const {totalCurrentValue, totalInvestment, totalPnL, todayPnL} =
    getTotalValues(list);
  return (
    <View style={styles.container}>
      <FlatList
        data={list}
        refreshing={loading}
        onRefresh={initApiCall}
        contentContainerStyle={styles.contentContainerStyle}
        keyExtractor={item => item.symbol}
        renderItem={({item}) => (
          <PortfolioItem
            totalCurrentValue={totalCurrentValue}
            totalInvestment={totalInvestment}
            totalPnL={totalPnL}
            todayPnL={todayPnL}
            item={item}
          />
        )}
        // eslint-disable-next-line react/no-unstable-nested-components
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </View>
  );
};

export default PortfolioList;

const styles = StyleSheet.create({
  container: {},
  separator: {
    height: normalize(1),
    backgroundColor: COLORS.primaryDark,
    marginHorizontal: normalize(16),
  },
  contentContainerStyle: {
    paddingTop: normalize(16),
    paddingBottom: normalize(180),
  },
});
