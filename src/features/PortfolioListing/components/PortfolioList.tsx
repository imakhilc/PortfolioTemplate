import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {PortfolioDataType} from '../utils/types';
import PortfolioItem from './PortfolioItem';

type PropType = {
  data: PortfolioDataType;
};

const PortfolioList: React.FC<PropType> = ({data}) => {
  const list = data.response?.userHolding;
  return (
    <View>
      <FlatList
        data={list}
        keyExtractor={item => item.symbol}
        renderItem={({item}) => <PortfolioItem item={item} />}
      />
    </View>
  );
};

export default PortfolioList;

const styles = StyleSheet.create({});
