import React, { useState, useEffect } from 'react';
import { Image, View, StyleSheet, Text, ScrollView, Button } from 'react-native';
import { Left, Right, Container, H1 } from 'native-base';

const SingleProduct = () => {
    
    const [item, setItem] = useState(props.route.params.item);
    const [availability, setAvailibility] = useState('');

    return (
        <Container style={styles.container}>
            <ScrollView style={styles.scroll}>
                <View>
                    <Image
                    source={{
                        uri: item.image ? item.image : 'https://i.postimg.cc/bNV62Gg8/kisspng-paper-bag-shopping-bag-shopping-bag-5a73715a6db5c0-7849378915175150984494.png'
                    }}
                    resizeMone='contain' 
                    style={styles.image}
                    />
                </View>
            </ScrollView>
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
})

export default SingleProduct;