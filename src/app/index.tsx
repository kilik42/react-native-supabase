import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
//import Auth from '../../auth';
import Auth from '../auth';
//import Cart from '../../cart';
import Cart from '../cart';
//Products from '../../products';
import Product from './product/product';
import Shop from './shop/shop';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Link } from 'expo-router';
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
    <View style={styles.container}>
     <View style={styles.container}>
      <Text>Home Screen</Text>

      <Link href="/shop">Go to Shop</Link>
      <Link href="/auth">Go to Auth</Link>
      <Link href="/cart">Go to Cart</Link>
      <Link href="/product/product">Go to Product</Link>
    </View>
    </View>
    </>
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
