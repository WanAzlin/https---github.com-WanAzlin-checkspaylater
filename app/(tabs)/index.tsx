
import { StyleSheet, TextInput, Button} from 'react-native';

import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';
import React, { useState } from 'react';

export default function TabOneScreen() {
  const [price, setPrice] = useState('1109');
  const [priceMonth, setMonthPrice] = useState('1203');
  const [month, setMonth] = useState('12');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Know Your Interest</Text>
      <Text style={styles.para}>Review your SPayLater payment plan before you checkout.</Text>
      <Text style={styles.textInput}>Product Price: </Text>
      <TextInput  style={styles.input} placeholder='1000' />
      <Text style={styles.textInput}>Monthly Installment: </Text>
      <TextInput   style={styles.input} placeholder='109' />
      <Text style={styles.textInput}>Month: </Text>
      <TextInput style={styles.input}  placeholder='12'/>
      
      <View style={styles.screenContainer}>
      <Button title="Submit" color={'#fff'}  />
    </View>
    
      
      </View>
      
      
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 5,
    alignItems: 'flex-start',
    margin:  10,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    margin:  10,
    padding: 10,
    marginBottom:"1%",
  },
  para: {
    fontSize: 13,
    fontWeight: 'regular',
    margin:  20,
    marginTop:"1%",
  },
  input: {
    borderWidth: 1,
    borderColor: '#777',
    padding: 12,
    width: 330,
    margin: 13,
    marginTop: -5,
    
  },
  textInput: {
    fontSize: 18,
    padding: 15,
    fontWeight: 'bold',
  },
  screenContainer: {
    margin: 10,
    marginRight: 30,
    justifyContent: "center",
    borderRadius: 10,
    borderColor: '#ff4500',
    borderWidth: 2,
    paddingHorizontal: 120,
    alignSelf: "center",
    paddingVertical: 5,
    backgroundColor: "#ff4500",
    
  }
});
