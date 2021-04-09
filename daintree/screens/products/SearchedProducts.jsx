import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { Content, Left, Body, ListItem, Thumbnail, Text } from 'native-base';

const { width } = Dimensions.get('window')

const SearchedProduct = (props) => {

    const { productsFiltered } = props;

    return (
        <Content style={{ width, }}>
            {productsFiltered.length > 0 ? (
                productsFiltered.map((item) => (
                    <ListItem
                    onPress={() => {props.navigation.navigate('Product Detail', {item,})}}
                    key={item.id}
                    avatar
                    >
                        <Left>
                            <Thumbnail 
                            source={{uri: item.image ? item.image : 'https://i.postimg.cc/bNV62Gg8/kisspng-paper-bag-shopping-bag-shopping-bag-5a73715a6db5c0-7849378915175150984494.png'}}
                            />
                        </Left>
                        <Body>
                            <Text>{item.name}</Text>
                            <Text note>{item.description}</Text>
                        </Body>
                    </ListItem>
                ))
                ) : (
                    <View style={styles.center}>
                        <Text style={{ alignSelf: 'center'}}>Sorry, we couldn't find what you we're looking for.</Text>
                    </View>
            )}
        </Content>
    );
}

const styles = StyleSheet.create({
    center: {
        justifyContent: 'center',
        alignItems: 'center',
    },
})

export default SearchedProduct;