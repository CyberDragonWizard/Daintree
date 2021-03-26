import React from 'react';
import { StyleSheet, Image, SafeAreaView } from 'react-native'

const Header = () => {
    return (
        <SafeAreaView style={styles.header}>
              <Image
              source={require('../assets/daintree-text.png')}
              resizeMode='contain'
              style={styles.text}
              />
              <Image
              source={require('../assets/daintree-logo.png')}
              resizeMode='contain'
              style={styles.image}
              />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    header: {
      width: '100%',
      backgroundColor: '#f5f5f5',
    },
    image: {
      height: 55,
      position: 'absolute',
      marginTop: 8,
    },
    text: {
      height: 32,
      marginTop: 24,
      marginBottom: 7,
      marginLeft: 26,
    },
  });

export default Header
