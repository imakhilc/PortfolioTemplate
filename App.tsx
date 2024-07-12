import React, {useEffect, useState} from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import {getPortfolioList} from './src/features/PortfolioListing/network/apiCalls';
import PortfolioList from './src/features/PortfolioListing/components/PortfolioList';
import Header from './src/components/Header';
import {COLORS, STRINGS} from './src/helpers/constants';

function App(): React.JSX.Element {
  const [portfolio, setPortfolio] = useState({});

  const initApiCall = async () => {
    setPortfolio(await getPortfolioList());
  };

  useEffect(() => {
    initApiCall();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={COLORS.dark} />
      <Header title={STRINGS.holdingTitle} />
      <PortfolioList data={portfolio} />
    </SafeAreaView>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.dark,
  },
});
