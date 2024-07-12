import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  useColorScheme,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {getPortfolioList} from './src/features/PortfolioListing/network/apiCalls';
import PortfolioList from './src/features/PortfolioListing/components/PortfolioList';

function App(): React.JSX.Element {
  const [portfolio, setPortfolio] = useState({});

  const initApiCall = async () => {
    setPortfolio(await getPortfolioList());
  };

  useEffect(() => {
    initApiCall();
  }, []);

  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    flex: 1,
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <PortfolioList data={portfolio} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  body: {},
});

export default App;
