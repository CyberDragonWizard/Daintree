import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Cart from '../screens/cart/Cart';
import Checkout from '../screens/cart/Checkout';

const Stack = createStackNavigator();

const CartNavigator = () => {
  
    return (
        <Stack.Navigator>
            <Stack.Screen
             name='Cart'
             component={Cart}
             options={{
                 headerShown: false,
             }}
            />
            <Stack.Screen
             name='Cart Checkout'
             component={Checkout}
             options={{
                 headerShown: false,
             }}
            />
        </Stack.Navigator>
    )
}

export default CartNavigator;