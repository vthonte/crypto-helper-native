import React, {useState} from 'react';
//import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';




export default function Price(props) {
  return (
    <View style={styles.container}>

  <Text>Current Price </Text>
<View style={styles.neoPadding}><Text> {props.price}</Text></View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    backgroundColor: '#dfd',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 2,
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
