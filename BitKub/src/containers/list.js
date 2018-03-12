import React, { Component } from 'react';
import {
  StyleSheet,
  View
} from 'react-native';
import Coin from '../components/coin/coin';

export default class List extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Coin
          symbol="BTC"
          name="Bitcoin"
          price={2500}
          change={5}
          active={false}
          onPress={() => alert('Selected!')}
        />
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 62, // take 62% of the screen height
    backgroundColor: '#673AB7',
  },
});