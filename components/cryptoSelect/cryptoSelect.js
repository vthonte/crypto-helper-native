import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Select from 'react-select';
import SelectDropdown from 'react-native-select-dropdown';





export default function CryptoSelect() {


const [options,setOptions] = useState([
    'Select',
    'ETH',
    'DAI', 
    'BTC', 
  ]);

  return (
    <View style={styles.container}>

<SelectDropdown
	data={options}
	onSelect={(selectedItem, index) => {
		console.log(selectedItem, index)
	}}
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
