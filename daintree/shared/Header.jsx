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
      height: 70,
      backgroundColor: '#f5f5f5',
    },
    image: {
      height: 65,
      position: 'absolute',
      marginLeft: 6,
      marginTop: 4,
    },
    text: {
      height: 40,
      marginTop: 22,
      marginBottom: 7,
      marginLeft: 18 ,
    },
  });

export default Header
