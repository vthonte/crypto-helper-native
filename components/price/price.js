import React, {useState} from 'react';
//import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';




export default function Price(props) {
  return (
    <View style={''}>

	<Text>Current Price: {props.price}</Text>

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
});
