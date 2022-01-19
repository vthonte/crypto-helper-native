import React, {useState, useEffect} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CryptoSelect from '../cryptoSelect/cryptoSelect';
import MarketCap from '../marketCap/marketCap';
import Price from '../price/price';






export default function DetailBox() {


  const [options,setOptions] = useState([
    'ETH',
    'DAI', 
    'BTC', 
  ]);

  const [marketCap, setMarketCap] = useState(0);
  const [price, setPrice] = useState(0);
  const [coinDict,setCoinDict] = useState({});




  const getCoinsFromApiAsync = async () => {
    var li=[];
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


  const getCoinDataFromApiAsync = async () => {
    try {
      const response = await fetch(
        'https://api.coincap.io/v2/assets'
      );
      const CoinData = await response.json();
        var coinDict={};
      for (var i=0,coin;i<CoinData.data.length;i++){
        coin = CoinData.data[i];
        //if (i==1){console.log(coin.id)};
        coinDict[coin.id] = {
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
        };;
        //console.log(coinDict[coin.id].marketCapUsd);
      }
      //setCoinDict(coinDict);

      return coinDict;
    } catch (error) {
      console.error(error);
    }
  };

  
  const changeMarketCap = (selectedItem) => {

      setMarketCap(coinDict[selectedItem.toString()]['marketCapUsd']);
      console.log("MarketCap:" + coinDict[selectedItem.toString()]['marketCapUsd']);
};

  const changePrice = (selectedItem) => {

  setPrice(coinDict[selectedItem.toString()]['priceUsd']);
  console.log("Price:" + coinDict[selectedItem.toString()]['priceUsd']);
};


  



  useEffect(async () => {

    setCoinDict(await getCoinDataFromApiAsync());
    setOptions(await getCoinsFromApiAsync());
  
  },([]));





  return (
    <View style={styles.container}>
          <StatusBar style="auto" />
          <CryptoSelect options={options} changeMarketCap = {changeMarketCap} changePrice = {changePrice}/>
    <View style={styles.neoBox}>
      <MarketCap marketCap = {marketCap}/>
	<Price price = {price}/>
	<View style={styles.neoDecision}>
      <Text>Yes or No</Text>
      </View>

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
    maxHeight: 20,
    alignSelf: 'center',
    //borderRadius: ,
  }
});
