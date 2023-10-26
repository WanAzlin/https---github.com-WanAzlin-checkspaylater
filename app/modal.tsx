import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

export default function ModalScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Info Section</Text>
      <Text style={styles.head1}>How to Use Check SpayLater?</Text>
      <Text style={styles.head2}>Step 1: Locate SPayLater Option on Shopee on Mobile App</Text>
      <Text style={styles.hp1}>Navigate to your desired product on Shopee. Scroll down to the payment options and find the SPayLater feature. Need help? See the example below:Navigate to your desired product on Shopee. Scroll down to the payment options and find the SPayLater feature. </Text>
      <Text style={styles.head3}>Step 2: Input Payment Details</Text>
      <Text style={styles.hp2}>Carefully copy or type the product's price, the monthly installment amount, and the duration (in months) into the calculator's corresponding input fields. Ensure the information is accurate to get the correct calculation results.</Text>
      <Text style={styles.head4}>Step 3: Calculate and Review</Text>
      <Text style={styles.hp3}>Once you've entered all the required information, click the ‘Submit’ button. The calculator will display a detailed breakdown of your payment plan, including the total interest charged. Review the information to make an informed decision before proceeding with SPayLater.</Text>
    
    
    
    
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 10,
    alignItems: 'center',
    padding:30
    
  },
  
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  head1: {
    
    alignItems: 'flex-end',
    padding:30,
    color: '#ff4500'
  },
  head2: {
    
    marginRight: 50,
    alignItems: 'flex-start',
    padding: 1,
    fontWeight: 'bold'
    
  },
  hp1: {
   
    paddingTop: 10,
    padding: 10,
    fontWeight: 'regular'
    
    
  },

  head3: {
    marginRight: 90,
    alignItems: 'flex-start',
    padding: 1,
    fontWeight: 'bold'
    
  },
  hp2: {
    marginRight: 10,
    paddingTop: 10,
    padding: 10,
    fontWeight: 'regular'
    
  },
  head4: {
    marginRight: 90,
    alignItems: 'flex-start',
    padding: 1,
    fontWeight: 'bold'
    
  },
  hp3: {
    
    paddingTop: 10,
    padding: 10,
    fontWeight: 'regular',
    marginRight: 15,
  },
  
});
