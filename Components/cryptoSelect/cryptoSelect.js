import React, {useEffect, useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import Select from 'react-select';
import SelectDropdown from 'react-native-select-dropdown';



var li=[];


export default function CryptoSelect({options, changeMarketCap, changePrice}) {


  /*

const [options,setOptions] = useState([
    'Select',
    'ETH',
    'DAI', 
    'BTC', 
  ]);

  const [coinDict,setCoinDict] = useState({});

  const getCoinsFromApiAsync = async () => {
    try {
      const response = await fetch(
        'https://api.coincap.io/v2/assets'
      );
      const CoinData = await response.json();

        CoinData.data.map((item, i) => (
          //console.log(i+" : "+item.id)
          li.push(item.id)
        ));
        //console.log(li);

      return li;
    } catch (error) {
      console.error(error);
    }
  };

  const getMarketCapFromApiAsync = async () => {
    try {
      const response = await fetch(
        'https://api.coincap.io/v2/assets'
      );
      const CoinData = await response.json();

      for (var i=0,coin;i<CoinData.data.length;i++){
        coin = CoinData.data[i];
        if (i==1){console.log(coin.id)};
        var coinDict2={
          "id": coin.id,
          "rank": coin.rank,
          "symbol": coin.symbol,
          "name": coin.name,
          "supply": coin.supply,
          "maxSupply": coin.maxSupply,
          "marketCapUsd": coin.marketCapUsd,
          "volumeUsd24Hr": coin.volumeUsd24Hr,
          "priceUsd": coin.priceUsd,
          "changePercent24Hr": coin.changePercent24Hr,
          "vwap24Hr": coin.vwap24Hr
        }
        coinDict[coin.id] = coinDict2;
      }
      setCoinDict(coinDict);
      console.log(coinDict['ethereum']);

      return coinDict;
    } catch (error) {
      console.error(error);
    }
  };
  



  useEffect(async () => {

    setCoinDict(await getMarketCapFromApiAsync());
    setOptions(await getCoinsFromApiAsync());
  },([]));

*/


  return (
    <View style={styles.container}>
      <View>


      </View>
<SelectDropdown
	data={options}
	onSelect={(selectedItem, index) => {
		console.log(selectedItem, index);
    changeMarketCap(selectedItem);
    changePrice(selectedItem);

	}
}
	buttonTextAfterSelection={(selectedItem, index) => {
		// text represented after item is selected
		// if data array is an array of objects then return selectedItem.property to render after item is selected
		return selectedItem
	}}
	rowTextForSelection={(item, index) => {
		// text represented for each item in dropdown
		// if data array is an array of objects then return item.property to represent item in dropdown
		return item
	}} />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    borderRadius: 20,
  },
});
