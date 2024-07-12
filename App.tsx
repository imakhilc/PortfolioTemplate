import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  Dimensions,
  SafeAreaView,
  StatusBar,
  StyleSheet,
} from 'react-native';
import {getPortfolioList} from './src/features/PortfolioListing/network/apiCalls';
import PortfolioList from './src/features/PortfolioListing/components/PortfolioList';
import Header from './src/components/Header';
import {COLORS, STRINGS} from './src/helpers/constants';
import {PortfolioDataType} from './src/features/PortfolioListing/utils/types';
import ErrorUI from './src/components/ErrorUI';

function App(): React.JSX.Element {
  const [portfolio, setPortfolio] = useState<PortfolioDataType>({});
  const [loading, setLoading] = useState(true);

  const initApiCall = async () => {
    setLoading(true);
    setPortfolio(await getPortfolioList());
    setLoading(false);
  };

  useEffect(() => {
    initApiCall();
  }, []);

  function render() {
    if (loading) {
      return (
        <ActivityIndicator
          style={styles.loader}
          size="large"
          color={COLORS.primaryLight}
        />
      );
    } else if (portfolio.error) {
      return (
        <ErrorUI
          title={STRINGS.wrong}
          button={STRINGS.tryAgain}
          call={initApiCall}
        />
      );
    } else {
      return (
        <PortfolioList
          loading={loading}
          initApiCall={initApiCall}
          data={portfolio}
        />
      );
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={COLORS.dark} />
      <Header title={STRINGS.holdingTitle} />
      {render()}
    </SafeAreaView>
  );
}

export default App;

const {height} = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.dark,
  },
  loader: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    height,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
