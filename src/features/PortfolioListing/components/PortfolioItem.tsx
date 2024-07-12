import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {HoldingItemType} from '../utils/types';

type PropType = {
  item: HoldingItemType;
};

const PortfolioItem: React.FC<PropType> = ({item}) => {
  return (
    <View key={item.symbol} style={styles.container}>
      <Text style={styles.title}>{item.symbol}</Text>
    </View>
  );
};

export default PortfolioItem;

const styles = StyleSheet.create({
  container: {},
});
