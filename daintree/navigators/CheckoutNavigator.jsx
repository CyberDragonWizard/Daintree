import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

// Screen
import Checkout from '../screens/cart/checkout/Checkout';
import Payment from '../screens/cart/checkout/Payment';
import Confirm from '../screens/cart/checkout/Confirm';

const Tab = createMaterialTopTabNavigator();

const Tabs= () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name='Shipping' component={Checkout} />
            <Tab.Screen name='Payment' component={Payment} />
            <Tab.Screen name='Confirm' component={Confirm} />
        </Tab.Navigator>
    )
}

export default function CheckoutNavigator () {
    return <Tabs />
}