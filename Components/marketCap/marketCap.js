
import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';




export default function MarketCap(props) {
  return (
    <View style={styles.container}>

<Text>Market Cap (in USD) </Text>
<View style={styles.neoPadding}><Text>{props.marketCap}</Text></View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    backgroundColor: '#ddf',
    alignItems: 'center',
    justifyContent: 'center',
  },
  neoPadding: {
    //flex: 1,
    //backgroundColor: '#dfdfdf',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    //width: 195,
    //maxHeight: 200,
    alignSelf: 'center',
    //borderRadius: ,
  },
});
