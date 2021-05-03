import React, { useState} from 'react';
import { View, Button } from 'react-native';
import { Container, Header, Content, ListItem, Text, Radio, Right, Left, Picker, Icon, Body, Title } from 'native-base';

const methods = [
    {name: 'Cash on Delivery', value: 1},
    {name: 'Bank Transfer', value: 2},
    {name: 'Card Payment', value: 3}
];

const paymentCards = [
    {name: 'Visa', value: 1},
    {name: 'MasterCard', value: 2},
    {name: 'AmericanExpress', value: 3},
    {name: 'Other', value: 4},
];

const Payment = (props) => {
    const order = props.route.params;

    const [selected, setSelected] = useState();
    const [card, setCard] = useState();

    return (
        <Container>
            <Header>
                <Body>
                    <Title>Choose your payment method.</Title>
                </Body>
            </Header>
            <Content>
                {methods.map((item, index) => {
                    return (
                        <ListItem key={item.name} onPress={() => setSelected(item.value)} >
                            <Left>
                                <Text>{item.name}</Text>
                            </Left>
                            <Right>
                                <Radio selected={selected == item.value}/>
                            </Right>
                        </ListItem>
                    )
                })}
                {selected == 3 ? (
                    <Picker
                    mode='dropdown'
                    style={{ height: 50}}
                    iosIcon={<Icon mane={'arrow-down'} />}
                    headerStyle={{ backgroundColor: 'e48257'}}
                    headerBackButtonTextStyle={{ color: 'white'}}
                    headerTitleStyle={{ color: 'white'}}
                    selectedValue={card}
                    onCValueChange={(x) => setCard(x)}
                    >
                        {paymentCards.map((c, index) => {
                            return <Picker.Item key={c.name} label={c.name} value={c.name} />
                        })}
                    </Picker>
                ) : null }
                <View style={{ marginTop: 60, alignSelf: 'center'}}>
                        <Button title={'Confirm'} onPress={() => props.navigation.navigate("Confirm", { order })}/>
                </View>
            </Content>
        </Container>
    )
}

export default Payment;