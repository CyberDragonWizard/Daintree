import React from 'react';
import { StyleSheet, View, Dimensions, Image, Text, Button} from 'react-native';
import { useFonts } from 'expo-font';
import { connect } from 'react-redux';
import * as actions from '../../Redux/actions/CartActions';

let { width } = Dimensions.get('window');

const ProductCard = (props) => {

    const { name, price, image, countInStock } = props;

    const [loaded] = useFonts({
        Montserrat: require('../../assets/fonts/Montserrat-Regular.ttf'),
      });

    if (!loaded) return null;

    return (
        <View style={styles.container}>
            <Image 
            style={styles.image}
            resizeMode='contain'
            source={{uri: image ? image : 'https://i.postimg.cc/bNV62Gg8/kisspng-paper-bag-shopping-bag-shopping-bag-5a73715a6db5c0-7849378915175150984494.png'}}
            />
            <View style={styles.card}/>
            <Text style={styles.title}>
                {name.length > 15 ? name.substring(0, 15 - 3)
                 + '...' : name}
            </Text>
            <Text style={styles.price}>${price}</Text>

            { countInStock > 0 ? (
                <View style ={{ marginBottom: 60}}>
                    <Button 
                    title={'Add'} 
                    color={'#3a6351'}
                    onPress={() => {
                        props.addItemToCart(props)
                    }}
                     />
                </View>
            ) : <Text style={{ marginTop: 20}}>Currently Unavailable</Text>}
        </View>
    )

}

const mapDispatchToProps = (dispatch) => {
    return {
        addItemToCart: (product) => 
            dispatch(actions.addToCart({quantity: 1, product}))
    }
}

const styles = StyleSheet.create({
    container: {
        width: width / 2 - 18,
        height: width / 1.7,
        padding: 10,
        borderRadius: 10,
        marginTop: 55,
        marginBottom: 5,
        marginLeft: 10,
        alignItems: 'center',
        elevation: 8,
        backgroundColor: 'white',
    },
    image: {
        width: width / 2 - 20 - 10,
        height: width / 2 - 20 - 30,
        backgroundColor: 'transparent',
        position: 'absolute',
        top: -45,
    },
    card: {
        marginBottom: 10,
        height: width / 2 - 20 - 90,
        backgroundColor: 'transparent',
        width: width / 2 - 20 - 10,
    },
    title: {
        fontSize: 14,
        textAlign: 'center',
        fontFamily: 'Montserrat',
    },
    price: {
        fontSize: 20,
        color: '#e48257',
        marginTop: 10,
        fontFamily: 'Montserrat',
    },
})

export default connect(null, mapDispatchToProps)(ProductCard);