import React, { useState, useEffect } from 'react';
import { Image, View, StyleSheet, Text, ScrollView, Button } from 'react-native';
import { Left, Right, Container, H1 } from 'native-base';
import { useFonts } from 'expo-font';

import { connect } from 'react-redux';
import * as actions from '../../Redux/actions/CartActions';

const SingleProduct = (props) => {
    
    const [item, setItem] = useState(props.route.params.item);
    const [availability, setAvailibility] = useState('');

    const [loaded] = useFonts({
        Montserrat: require('../../assets/fonts/Montserrat-Regular.ttf'),
      });

    if (!loaded) return null;

    return (
        <Container style={styles.container}>
            <ScrollView style={styles.scroll}>
                <View>
                    <Image
                    source={{
                        uri: item.image ? item.image : 'https://i.postimg.cc/bNV62Gg8/kisspng-paper-bag-shopping-bag-shopping-bag-5a73715a6db5c0-7849378915175150984494.png'
                    }}
                    resizeMode='contain' 
                    style={styles.image}
                    />
                </View>
                <View style={styles.content}>
                    <H1 style={styles.header}>{item.name}</H1>
                    <Text style={styles.contentText}>{item.brand}</Text>
                </View>
            </ScrollView>
            <View style={styles.bottomContainer}>
                <Left>
                    <Text style={styles.price}>$ {item.price}</Text>
                </Left>
                <Right>
                    <Button 
                    title='Add' 
                    titleStyle={{ fontFamily: 'Montserrat', fontSize: 16 }} 
                    color={'#3a6351'}
                    />
                </Right>
            </View>
        </Container>
    )
}


const styles = StyleSheet.create({
    container: {
        position: 'relative',
        height: '100%'
    },
    scroll: {
        marginBottom: 80,
        padding: 5,
    },
    imageContainer: {
        backgroundColor: 'white',
        margin: 0,
        padding: 0,
    },
    image: {
        width: '100%',
        height: 250,
    },
    content: {
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    contentText: {
        fontSize: 18,
        marginBottom: 20,
        fontFamily: 'Montserrat',
    },
    header: {
        marginBottom: 8,
        fontFamily: 'Montserrat',
    },
    bottomContainer: {
        flexDirection: 'row',
        position: 'absolute',
        bottom: 0,
        left: 0,
        backgroundColor: 'white',
    },
    price: {
        fontFamily: 'Montserrat',
        fontSize: 28,
        margin: 20,
        color: '#e48257',
    },
})

export default SingleProduct;