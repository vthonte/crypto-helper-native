import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CryptoSelect from './components/cryptoSelect/cryptoSelect';
import MarketCap from './components/marketCap/marketCap';
import Price from './components/price/price';


export default function App() {
  return (
    <View style={styles.container}>
          <CryptoSelect/>
    <View style={styles.neoBox}>
      <MarketCap/>
	<Price/>
	<View style={styles.neoDecision}>
      <Text>Yes or No</Text>
      </View>
      <StatusBar style="auto" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  neoBox: {
      flex: 1,
    backgroundColor: '#dfdfdf',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    width: 195,
    maxHeight: 200,
    alignSelf: 'center',
    //borderRadius: ,
  },
    neoDecision: {
      flex: 1,
    backgroundColor: '#dfdfdf',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    width: 195,
    maxHeight: 200,
    alignSelf: 'center',
    //borderRadius: ,
  }
});
