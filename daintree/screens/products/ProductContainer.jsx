import React, { useState, useEffect } from 'react';
import { View, StyleSheet, ActivityIndicator, FlatList } from 'react-native';
import { Container, Header, Icon, Item, Input, Text } from 'native-base';
import ProductList from './ProductList';

const data = require('../../assets/data/products.json')

const ProductContainer = () => {

    const [products, setProducts] = useState([]);
    const [productsFiltered, setProductsFiltered] = useState([]);
    const [focus, setFocus] = useState();

    useEffect(() => {
        setProducts(data);
        setProductsFiltered(data);
        setFocus(false);

        return () => {
          setProducts([])
        }
    }, [])

    const searchProduct = (text) => {
        setProductsFiltered(
            products.filter((item) => item.name.toLowerCase().includes(text.toLowerCase()))
        )
    }
  
    return (
        
        <Container>
            <Header searchBar rounded style={{ backgroundColor: '#e48257'}} androidStatusBarColor='#e48257'>
                <Item>
                    <Icon name='ios-search' style={{ color: '#393232'}}/>
                    <Input placeholder='search' />
                </Item>
            </Header>
            <View style={styles.container}>
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


