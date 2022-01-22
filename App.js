import {React, useState} from "react";
import { Provider as PaperProvider } from "react-native-paper";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

//import DetailBox from './components/detailBox/detailBox';
import { Button } from 'react-native-web';
import theme from "./CustomProperties/Themes";

import MainScreen from "./Screens/MainScreen";
import TopBar from "./Components/TopBar";

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

    <PaperProvider theme={theme}>
      <TopBar />
      <MainScreen />
    </PaperProvider>
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
