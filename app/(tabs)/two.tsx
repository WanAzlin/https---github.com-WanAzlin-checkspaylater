import { StyleSheet, Image } from 'react-native';

import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View, } from '../../components/Themed';

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>PayLater Overview</Text>
      <Text style={styles.para}>Detail breakdown of your upcoming purchase</Text>
    
      <View style={styles.separator} lightColor="#353232" darkColor="rgba(53, 50, 50 ,0.1)" />
      <View style={styles.stack}>
      <Text style={{fontWeight: 'bold', fontSize:15, marginLeft: 10}}>Product Price (RM):</Text>
      <Text style={{fontWeight: 'regular', color: '#626161', marginLeft: 10}}>1109</Text>
      <Text style={{fontWeight: 'bold', fontSize:15, marginLeft: 10 ,marginTop: 10,}}>Monthly Installment(RM):</Text>
      <Text style={{fontWeight: 'regular', color: '#626161', marginLeft: 10  }}>109</Text>
      <Text style={{fontWeight: 'bold', fontSize:15,  marginLeft: 10,marginTop: 10 }}>Month</Text>
      <Text style={{fontWeight: 'regular', color: '#626161', marginLeft: 10  }}>12</Text>

      <Text style={{fontWeight: 'bold', fontSize:14, marginLeft: 10, marginTop: 10 }}>Total Amount Paid (RM): </Text>
      <Text style={{fontWeight: 'bold', color: '#F71010', marginLeft: 10  }}>1321.20</Text>
      <Text style={{fontWeight: 'bold', fontSize:14, marginLeft: 10 ,marginTop: 10}}>Interest Charged (RM):</Text>
      <Text style={{fontWeight: 'bold', color: '#F71010', marginLeft: 10  }}>201</Text>
      <Text style={{fontWeight: 'bold', fontSize:14, marginLeft: 10, marginTop: 10 }}>Interest Rate (%)</Text>
      <Text style={{fontWeight: 'bold', color: '#F71010' , marginLeft: 10 }}>12</Text>
      </View> 

      

      
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    
  },
  para: {
    fontSize: 12,
    padding: 10,
    fontWeight: 'regular',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
 stack: {
   paddingRight: 200,
   margin: 10,
  },
  
});
