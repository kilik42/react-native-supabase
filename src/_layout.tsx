import { Stack } from 'expo-router';

export default function RootLayout(){
    return (
        <Stack>
            <Stack.Screen name="app/shop/App" options={{headerShown: true, title: 'Shop'}}/>
            <Stack.Screen name="auth" options={{headerShown: true, title: 'Auth'}}/>
            <Stack.Screen name="cart" options={{headerShown: true, title: 'Shopping Cart'}}/>
            <Stack.Screen name="app/product/product" options={{presentation: 'modal', title: 'Product'}}/>
            <Stack.Screen name="app/categories/categories" options={{headerShown: true, title: 'Categories'}}/>
        </Stack>
    )
}