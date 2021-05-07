import React, { useEffect, useState } from 'react';
import { View, Text, Button } from 'react-native';
import { Item, Picker } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import Input from '../../../shared/Form/Input';
import FormContainer from '../../../shared/Form/FormContainer';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import { connect } from 'react-redux';

const countries = require('../../../assets/data/countries.json')

const Checkout = (props) => {

  const [orderItems, setOrderItems] = useState();
  const [address, setAddress] = useState();
  const [address2, setAddress2] = useState();
  const [city, setCity] = useState();
  const [zip, setZip] = useState();
  const [country, setCountry] = useState();
  const [phone, setPhone] = useState();

  useEffect(() => {
    setOrderItems(props.cartItems)

    return () => {
      setOrderItems();
    }
  }, [])

  const checkOut = () => {
    let order = {
      city,
      country,
      dateOrdered: Date.now(),
      orderItems,
      phone,
      shippingAddress1: address,
      shippingAddress2: address2,
      zip,
    }

    props.navigation.navigate("Payment", { order: order })
  }

  return (
    <KeyboardAwareScrollView
      viewIsInsideTabBar={true}
      extraHeight={200}
      enableOnAndroid={true}
    >
      <FormContainer title={"Shipping Address"}>
        <Input
          placeholder={"Phone"}
          name={"phone"}
          value={phone}
          keyboardType={"numeric"}
          onChangeText={(text) => setPhone(text)}
        />
        <Input
          placeholder={"Shipping Address 1"}
          name={"ShippingAddress1"}
          value={address}
          onChangeText={(text) => setAddress(text)}
        />
        <Input
          placeholder={"Shipping Address 2"}
          name={"ShippingAddress2"}
          value={address2}
          onChangeText={(text) => setAddress2(text)}
        />
        <Input
          placeholder={"City"}
          name={"city"}
          value={city}
          onChangeText={(text) => setCity(text)}
        />
        <Input
          placeholder={"Zip Code"}
          name={"zip"}
          value={zip}
          keyboardType={"numeric"}
          onChangeText={(text) => setZip(text)}
        />
        <Item picker>
          <Picker
            mode='dropdown'
            iosIcon={<Icon name='arrow-down' color={'#4e9ef5'} />}
            style={{ width: undefined, height: 40, backgroundColor: 'white' }}
            selectedValue={country}
            placeholder='Select Your Country'
            placeholderStyle={{ color: '#4e9ef5' }}
            placeholderIconColor='#4e9ef5'
            onValueChange={(e) => setCountry(e)}
          >
            {countries.map((country) => {
              return <Picker.Item
                key={country.code}
                label={country.name}
                value={country.name}
              />
            })}
          </Picker>
        </Item>
        <View style={{ width: '80%', alignItems: 'center' }}>
          <Button title='Confirm' onPress={() => checkOut()} />
        </View>
      </FormContainer>
    </KeyboardAwareScrollView>
  )
}

const mapStateToProps = (state) => {
  const { cartItems } = state;

  return {
    cartItems: cartItems,
  }
}

export default connect(mapStateToProps)(Checkout);