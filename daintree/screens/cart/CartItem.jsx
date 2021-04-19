import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Text, Left, Right, ListItem, Thumbnail, Body} from 'native-base';

const CartItem = (props) => {
    const data = props.item.item.product;
    const [quantity, setQuanity] = useState(props.item.item.quantity);

    return (
        <ListItem
            style={styles.listItem}
            key={Math.random()}
            avatar
            >
            <Left>
                <Thumbnail source={{ uri: data.image ? data.image : 'https://i.postimg.cc/bNV62Gg8/kisspng-paper-bag-shopping-bag-shopping-bag-5a73715a6db5c0-7849378915175150984494.png' }}/>
            </Left>
            <Body style={styles.body}>
                <Left>
                    <Text>{data.name}</Text>
                </Left>
                <Right>
                    <Text>$ {data.price}</Text>
                </Right>
            </Body>
        </ListItem>
    )
}

const styles = StyleSheet.create({
    listItem: {
        alignItems: 'center',
        backgroundColor: 'white',
        justifyContent: 'center',
    },
    body: {
        alignItems: 'center',
        flexDirection: 'row',
    },
})

export default CartItem;