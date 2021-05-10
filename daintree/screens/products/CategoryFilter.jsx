import React from 'react';
import { StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { ListItem, Badge, Text } from 'native-base';
import { useFonts } from 'expo-font';

const CategoryFilter = (props) => {

    const [loaded] = useFonts({
        Montserrat: require('../../assets/fonts/Montserrat-Regular.ttf'),
      });

    if (!loaded) return null;

    return (
        <ScrollView
        bounces={true}
        horizontal={true}
        style={{ backgroundColor:'white' }}
        >
            <ListItem style={styles.listItem}>
                <TouchableOpacity
                key={1}
                onPress={() => {
                    props.categoryFilter('all'), props.setActive(-1)
                }}
                >
                    <Badge
                    style={[styles.center, {margin: 5},
                        props.active == -1 ? styles.active : styles.inactive
                    ]}
                    >
                        <Text style={{ color: 'white' }}>All</Text>
                    </Badge>
                </TouchableOpacity>
                {props.categories.map((category) => (
                    <TouchableOpacity
                    key={category.id}
                    onPress={() => {
                        props.categoryFilter(category.id), 
                        props.setActive(props.categories.indexOf(category))
                    }}
                    >
                        <Badge
                        style={[styles.center, 
                            {margin: 5},
                            props.active == props.categories.indexOf(category) ? styles.active : styles.inactive
                        ]}
                        >
                            <Text style={{ color: 'white', fontFamily: 'Montserrat', fontSize: 14 }}>{category.name}</Text>
                        </Badge>
                    </TouchableOpacity>
                ))}
            </ListItem>
        </ScrollView>
    )

}

const styles = StyleSheet.create({
    listItem: {
        margin: 0,
        padding: 0,
        borderRadius: 0,
    },
    center: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    active: {
        backgroundColor: '#00cce3',
    },
    inactive: {
        backgroundColor: '#393232',
    },
})

export default CategoryFilter