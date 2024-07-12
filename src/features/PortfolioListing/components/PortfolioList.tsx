import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {PortfolioDataType} from '../utils/types';
import PortfolioItem from './PortfolioItem';
import {normalize} from '../../../helpers/utils';
import {COLORS} from '../../../helpers/constants';

type PropType = {
  data: PortfolioDataType;
};

const PortfolioList: React.FC<PropType> = ({data}) => {
  const list = data.response?.userHolding;
  return (
    <View style={styles.container}>
      <FlatList
        data={list}
        contentContainerStyle={styles.contentContainerStyle}
        keyExtractor={item => item.symbol}
        renderItem={({item}) => <PortfolioItem item={item} />}
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
    marginBottom: normalize(12),
  },
  contentContainerStyle: {
    paddingTop: normalize(16),
    paddingBottom: normalize(180),
  },
});
