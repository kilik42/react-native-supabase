import { Link } from 'expo-router';
import {Tabs} from 'expo-router/tabs';

const TabsLayout = () => {
  return (
    // Your layout components go here
    <Tabs>
      <Tabs.Screen name="index" options={{title: 'Shop'}} />
      <Tabs.Screen name="orders" options={{title: 'Orders'}} />
      <Tabs.Screen name="cart" options={{title: 'Cart'}} />
    </Tabs>
  );
}   