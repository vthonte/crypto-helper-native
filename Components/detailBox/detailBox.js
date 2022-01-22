import React, {useState, useEffect} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CryptoSelect from '../cryptoSelect/cryptoSelect';
import MarketCap from '../marketCap/marketCap';
import Price from '../price/price';






export default function DetailBox() {


  const [options,setOptions] = useState([
    'ethereum',
    'neo', 
    'bitcoin', 
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
      console.log("Error while getting Coins - Retrying");
      li = await getCoinsFromApiAsync();

      //console.error(error);

      return li;
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
      console.log("Error while getting Coin data - Retrying");
      coinDict = await getCoinDataFromApiAsync();
      //console.error(error);

      return coinDict;
    }
  };

  
  const changeMarketCap = (selectedItem) => {
    try{

      setMarketCap(coinDict[selectedItem.toString()]['marketCapUsd']);
      //console.log("MarketCap:" + coinDict[selectedItem.toString()]['marketCapUsd']);
    }catch (error){
      console.log('Error while fetching MarketCapUsd for '+selectedItem.toString());
    }

    };

  const changePrice = (selectedItem) => {

    try{

      setPrice(coinDict[selectedItem.toString()]['priceUsd']);
      //console.log("MarketCap:" + coinDict[selectedItem.toString()]['marketCapUsd']);
    }catch (error){
      console.log('Error while fetching MarketCapUsd for '+selectedItem.toString());
    }


  //console.log("Price:" + coinDict[selectedItem.toString()]['priceUsd']);
};


  



  useEffect(async () => {

    var coinDataTemp = await getCoinDataFromApiAsync();
    if (coinDataTemp)
    {  setCoinDict(coinDataTemp);}

    var coinDataTemp = await getCoinsFromApiAsync();
    if (coinDataTemp)
    {  setOptions(coinDataTemp);}

  },([setOptions]));





  return (
    <View style={styles.container}>
          <StatusBar style="auto" />
          <View><Text>Tap to Select coin:</Text></View>
          <CryptoSelect options={options} changeMarketCap = {changeMarketCap} changePrice = {changePrice}/>
    <View style={styles.neoBox}>
      <MarketCap marketCap = {marketCap}/>
    </View>

    <View style={styles.neoBox}>
      <Price price = {price}/>

      </View>

      <View style={styles.neoDecision}>
        <View style={styles.neoDecisionYes}>      
        <Text>Yes</Text>
        </View>
        <View style={styles.neoDecisionNo}>
        <Text>No</Text>
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
    //justifyContent: 'center',
  },
  neoBox: {
    //flex: 1,
   // flexDirection:'row',
    //backgroundColor: '#dfdfdf',
    //alignItems: 'center',
    //justifyContent: 'center',
    textAlign: 'center',
    width: '100%',
    //maxHeight: 200,
    //alignSelf: 'stretch',
    //borderRadius: ,
  },
    neoDecision: {
      //flex: 1,
    flexDirection:'row',
    backgroundColor: '#dfdfdf',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    //width: 195,
    //maxHeight: 20,
    alignSelf: 'center',
    //borderRadius: ,
  },
  neoDecisionYes: {
  flex: 1,
  backgroundColor: '#dfffdf',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  //width: 195,
  //maxHeight: 20,
  alignSelf: 'center',
  //borderRadius: ,
},
neoDecisionNo: {
flex: 1,
backgroundColor: '#ffdfdf',
alignItems: 'center',
justifyContent: 'center',
textAlign: 'center',
//width: 195,
//maxHeight: 20,
alignSelf: 'center',
//borderRadius: ,
},
});
