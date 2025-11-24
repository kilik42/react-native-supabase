import {View, Text} from 'react-native';
import { Stack } from 'expo-router';

export default function OrdersLayout() {
    return (
        // Your layout components go here
        <Stack>
            <Stack.Screen 
            name="orders/index"
            options={{
                headerShown: false,
                title: 'Orders'
                }} />
        </Stack>
    )
}       

