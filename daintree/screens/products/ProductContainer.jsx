import React, { useState, useEffect } from 'react';
import { View, StyleSheet, ActivityIndicator, FlatList } from 'react-native';
import { Container, Header, Icon, Item, Input, Text } from 'native-base';
import ProductList from './ProductList';

const data = require('../../assets/data/products.json')

const ProductContainer = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        setProducts(data);

        return () => {
          setProducts([])
        }
    }, [])
  
    return (
        
        <Container>
            <Header searchBar rounded>
                <Item>
                    <Icon name='ios-search'/>
                    <Input placeholder='search' />
                </Item>
            </Header>
            <View style={styles.container}>
                <Text>Product Container</Text>
                    <View style={styles.listContainer}>
                    <FlatList
                    numColumns={2} 
                    data={products}
                    renderItem={({item}) => <ProductList
                    key={item.brand}
                    item={item}/>}
                    keyExtractor={item => item.brand} 
                    />
                    </View>
            </View>
        </Container>
    )
}

const styles = StyleSheet.create({
    container: {
      flexWrap: "wrap",
      backgroundColor: "gainsboro",
    },
    listContainer: {
      flex: 1,
      flexDirection: "row",
      alignItems: "flex-start",
      flexWrap: "wrap",
      backgroundColor: "gainsboro",
    },
    center: {
        justifyContent: 'center',
        alignItems: 'center'
    }
  });

export default ProductContainer;


