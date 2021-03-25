import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View } from 'react-native';

// Screens
import ProductContainer from './screens/products/ProductContainer';
import Header from './shared/Header'

export default function App() {
  return (
    <View>
      <Header />
      <ProductContainer/>
    </View>
  );
}