import React, { useState } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Alert
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { fetchDeleteFavFood } from '../../services/menus';
import { useNavigation } from '@react-navigation/native';

const ListItem = ({ data }) => {
    const navigation = useNavigation();

    const handleDelete = async () => {
        return await fetchDeleteFavFood({
            food: data.id,
        }).then(res => {
            Alert.alert('Delete Successfully');
            navigation.reset({
                index: 0,
                routes: [{ name: 'List' }],
            });
        })
    }

    return (
        <>
            <View style={styles.item}>
                <View style={styles.box}>
                    <View>
                        <Text style={styles.title}>{data.food.title}</Text>
                        <Text style={styles.desc}>{data.food.desc}</Text>
                    </View>
                </View>
                <View style={{ left: 330 }}>
                    <View style={{ left: 30 }}>
                        <TouchableOpacity onPress={(handleDelete)} >
                            <Icon
                                name="close"
                                size={25}
                                color="#fff"
                                style={{ backgroundColor: 'red', width: 25, }}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </>
    )
}

export default ListItem;

const styles = StyleSheet.create({

    title: {
        fontSize: 25,
        marginLeft: 10,
        color: 'red'
    },

    desc: {
        fontSize: 18,
        marginLeft: 10,
        marginTop: 10
    },

    box: {
        padding: 5,
        flexDirection: 'row'
    },

    icon: {
        backgroundColor: 'red',
        width: 25,
        borderRadius: 5,
        left: '95%',

    },

    item: {
        marginBottom: 40,
        backgroundColor: '#fff',
        padding: 10,
        flex: 2,
    }
})