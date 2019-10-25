import React from 'react';

import {StyleSheet, View, Text} from 'react-native';
import AppContainer from './src/components/RouteContainer';
import Store from './src/store';

function App() {
  return (
    <View style={styles.vie}>
      <Store>
        <AppContainer />
      </Store>
    </View>
  );
}
export default App;

const styles = StyleSheet.create({
  vie: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
