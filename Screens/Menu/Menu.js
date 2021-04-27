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
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const Menu = ({ route }) => {
    const navigation = useNavigation();
    const [menu, SetMenu] = useState([]);

    useEffect(() => {
        async function getMenu() {
            const res = await fetchMenu();
            SetMenu(res);
        }
        getMenu();
    }, [route]);

    const renderItem = ({ item }) => (
        <MenuItem data={item} />
    );

    const numColumns = 2

    return (
        <View style={styles.container}>
            <View style={styles.header}>

                <View style={{ top: 40, left: 8 }}>
                    <TouchableOpacity style={{ width: 40 }} >
                        <Icon
                            name="menu-outline"
                            size={30}
                            color="#fff"
                            backgroundColor="#61b1fc"
                            onPress={() => navigation.openDrawer()}
                        />
                    </TouchableOpacity>
                </View>

                <View style={{ top: 30 }}>
                    <Text style={styles.title}>Menu</Text>
                </View>
            </View>
            <View style={styles.footer}>
                <FlatList
                    numColumns={numColumns}
                    data={menu}
                    renderItem={renderItem}
                    keyExtractor={item => item.id.toString()}
                />
            </View>
        </View>
    )
}

export default Menu;

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },

    background: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: 700,
    },

    header: {
        height: 230,
        backgroundColor: '#4364f7',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20
    },


    title: {
        color: '#fff',
        fontSize: 28,
        fontWeight: 'bold',
        top: 40,
        paddingLeft: 20
    },

    footer: {
        flex: 1,
        bottom:60,

    },

    text: {
        fontSize: 17,
        color: '#fff',

    },

    link: {
        flexDirection: 'row',
        paddingTop: 24,
        paddingBottom: 20,
        justifyContent: 'center'

    }
})

