import React from 'react';
import { StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { ListItem, Badge, Text } from 'native-base';

const CategoryFilter = (props) => {

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
                    key={category._id}
                    onPress={() => {
                        props.categoryFilter(category._id), 
                        props.setActive(props.categories.indexOf(category))
                    }}
                    >
                        <Badge
                        style={[styles.center, 
                            {margin: 5},
                            props.active == props.categories.indexOf(category) ? styles.active : styles.inactive
                        ]}
                        >
                            <Text style={{ color: 'white' }}>{category.name}</Text>
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