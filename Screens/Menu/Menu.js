import React, { useEffect, useState } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity,
    ScrollView,
    FlatList
} from 'react-native';
import { fetchMenu } from '../../services/menus';
import MenuItem from './MenuItem';

const Menu = (props) => {
    const [menu, SetMenu] = useState([]);

    useEffect(() => {
        async function getMenu() {
            const res = await fetchMenu();
            SetMenu(res);
        }

        getMenu();
    }, [])

    const renderItem = ({ item }) => (
        <MenuItem data={item} />
    );

    return (
        <View style={styles.container}>
            <Text style={styles.hints}>Menu for meals of the day:</Text>

            <FlatList
                data={menu}
                renderItem={renderItem}
                keyExtractor={item => item.id.toString()}
                
            />
        </View>
    )

}

export default Menu;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    hints: {
        fontSize: 25,
        fontWeight: 'bold',
        marginTop: 20,
        marginLeft:20,

    },

    breakfast: {
        width: '90%',
        marginTop: 10,
        borderWidth: 1,
        borderRadius: 10,
        borderStyle: 'dashed',
        marginLeft: 20,
    },

})

