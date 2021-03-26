import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, StyleSheet} from 'react-native';

// Screens
import ProductContainer from './screens/products/ProductContainer';
import Header from './shared/Header'

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <ProductContainer/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'center'
  }
})