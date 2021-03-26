import React from 'react';
import ProductCard from './ProductCard';
import { TouchableOpacity, View, Dimensions } from 'react-native';

const { width } = Dimensions.get('window')

const ProductList = (props) => {

    const { item } = props;

    return (
        <TouchableOpacity style={{ width: '50%'}}>
            <View style={{ width: width / 2,
                 backgroundColor: '#f5f5f5',}}
            >
                <ProductCard {...item} />
            </View>
        </TouchableOpacity>
    )
}

export default ProductList;