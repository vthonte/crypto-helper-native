import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
// import CryptoSelect from './components/cryptoSelect/cryptoSelect';
// import MarketCap from './components/marketCap/marketCap';
// import Price from './components/price/price';
import DetailBox from './components/detailBox/detailBox';
import { Button } from 'react-native-web';


export default function App() {

  const getCoinsFromApiAsync = async () => {
    try {
      const response = await fetch(
        'https://api.coincap.io/v2/assets'
      );
      const CoinData = await response.json();
      console.log(CoinData);
      return CoinData.id;
    } catch (error) {
      console.error(error);
    }
  };



  return (
    <View style={styles.container}>
      <DetailBox/>
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
    //backgroundColor: '#dfdfdf',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    //width: 195,
    //maxHeight: 200,
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
