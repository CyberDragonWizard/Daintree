import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Dimensions, ScrollView } from 'react-native';
import { Container, Header, Icon, Item, Input, Text } from 'native-base';

//Screens
import Banner from '../../shared/Banner';
import CategoryFilter from './CategoryFilter';
import ProductList from './ProductList';
import SearchedProduct from './SearchedProducts';

const data = require('../../assets/data/products.json');
const categoriesData = require('../../assets/data/categories.json');

let { height } = Dimensions.get('window')

const ProductContainer = () => {

    const [products, setProducts] = useState([]);
    const [productsFiltered, setProductsFiltered] = useState([]);
    const [focus, setFocus] = useState();
    const [categories, setCategories] = useState([]);
    const [productsCtg, setProductsCtg] = useState([]);
    const [active, setActive] = useState();
    const [initialState, setInitialState] = useState([]);

    useEffect(() => {
        setProducts(data);
        setProductsFiltered(data);
        setFocus(false);
        setCategories(categoriesData);
        setProductsCtg(data);
        setActive(-1);
        setInitialState(data);

        return () => {
          setProducts([]);
          setProductsFiltered([]);
          setFocus();
          setCategories([]);
          setActive();
          setInitialState();
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

    const changeCtg = (ctg) => {
      {
        ctg === 'all'
          ? [setProductsCtg(initialState), setActive(true)]
          : [
            setProductsCtg(
              products.filter((product) => product.category.$oid === ctg),
              setActive(true)
            ),
          ];
      }
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
                     {focus == true ? <Icon onPress={onBlur} name='ios-close' />: null}
                </Item>
            </Header>
            {focus == true ? (
                <SearchedProduct productsFiltered={productsFiltered}/>
            ) : (
            <ScrollView>
              <View>
                  <View style={{ height: 220}}>
                    <Banner />
                  </View>
                  <View>
                    <CategoryFilter
                    categories={categories}
                    categoryFilter={changeCtg}
                    productsCtg={productsCtg}
                    active={active}
                    setActive={setActive}
                    />
                  </View>
                  {productsCtg.length > 0 ? (
                    <View style={styles.listContainer}>
                      {productsCtg.map((product) => {
                        return(
                          <ProductList
                          key={product._id.$oid}
                          item={product}
                          />
                        )
                      })}
                    </View>
                  ) : (
                    <View style={[styles.center, { height: height / 2}]}>
                      <Text>Sorry, we couldn't find anything.</Text>
                    </View>
                  )}
              </View>
            </ScrollView>
            )}
        </Container>
    )
}

const styles = StyleSheet.create({
    container: {
      flexWrap: 'nowrap',
      backgroundColor: "white",
    },
    listContainer: {
      height,
      flex: 1,
      flexDirection: "row",
      alignItems: "flex-start",
      flexWrap: "wrap",
      backgroundColor: "#f5f5f5",
    },
    center: {
      justifyContent: 'center',
      alignItems: 'center'
    }
  });

export default ProductContainer;


