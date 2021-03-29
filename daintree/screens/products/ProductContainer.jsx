import React, { useState, useEffect } from 'react';
import { View, StyleSheet, ActivityIndicator, FlatList } from 'react-native';
import { Container, Header, Icon, Item, Input, Text } from 'native-base';

//Screens
import Banner from '../../shared/Banner'
import ProductList from './ProductList';
import SearchedProduct from './SearchedProducts';

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
          setProducts([]);
          setProductsFiltered([]);
          setFocus();
        }
    }, [])

    const searchProduct = (text) => {
        setProductsFiltered(
            products.filter((product) => product.name.toLowerCase().includes(text.toLowerCase()))
        )
    }

    const openList = () => {
      setFocus(true);
    }

    const onBlur = () => {
      setFocus(false)
    }
  
    return (
        
        <Container>
            <Header searchBar rounded style={{ backgroundColor: '#e48257'}} androidStatusBarColor='#e48257'>
                <Item>
                    <Icon name='ios-search' style={{ color: '#393232'}}/>
                    <Input 
                    placeholder='search'
                    onFocus={openList}
                    onChangeText={(text) => searchProduct(text)}
                     />
                     {focus == true ? (
                         <Icon onPress={onBlur} name='ios-close' />
                     ) : null}
                </Item>
            </Header>
            {focus == true ? (
                <SearchedProduct productsFiltered={productsFiltered}/>
            ) : (
            <View style={styles.container}>
                <View>
                    <Banner />
                </View>
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
            )}
        </Container>
    )
}

const styles = StyleSheet.create({
    container: {
      flexWrap: "wrap",
      backgroundColor: "white",
    },
    listContainer: {
      flex: 1,
      flexDirection: "row",
      alignItems: "flex-start",
      flexWrap: "wrap",
      backgroundColor: "#f5f5f5",
    },
  });

export default ProductContainer;


