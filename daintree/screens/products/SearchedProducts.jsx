import React from 'react';
import { View, StyleSheet, } from 'react-rative';
import { Content, Left, Body, ListenItem, Thumbnail, Text } from 'native-base';

const SearchedProduct = (props) => {

    const { productsFiltered } = props;

    return (
        <Content>
            {productsFiltered.length > 0 ? (
                productsFiltered.map((item) => (
                    <ListItem
                    
                    key={item.id}
                    avatar
                    source={{uri: image ? image : 'https://i.postimg.cc/bNV62Gg8/kisspng-paper-bag-shopping-bag-shopping-bag-5a73715a6db5c0-7849378915175150984494.png'}}
                    >
                        <Left>
                            <Thumbnail />
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