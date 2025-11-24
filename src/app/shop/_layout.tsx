import { Link } from 'expo-router';
import {Tabs} from 'expo-router/tabs';
import { SafeAreaView } from 'react-native-safe-area-context/lib/typescript/src/SafeAreaView';

const TabsLayout = () => {
  return (
    // Your layout components go here
    <SafeAreaView>
    <Tabs>
      <Tabs.Screen name="Shop Home" options={{title: 'Shop'}} />
      <Tabs.Screen name="orders" options={{title: 'Orders'}} />
      <Tabs.Screen name="cart" options={{title: 'Cart'}} />
    </Tabs>
    </SafeAreaView>
  );
}   

export default TabsLayout;