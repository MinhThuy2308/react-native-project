import React, { useState, useEffect, useRef } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    Button,
    FlatList,
    Modal,
    TouchableOpacity
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation, useRoute } from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';
import { fetchFavFoodByUser } from '../../services/menus';
import ListItem from '../Food/ListItem';


const List = ({ data }) => {
    const navigation = useNavigation();
    const [userId, setUserId] = useState('');
    const [favfood, setFavFood] = useState([]);
    const route = useRoute();

    useEffect(() => {
        async function getUserId() {
            const value = await AsyncStorage.getItem('userId');
            setUserId(value);
        }

        async function getFavFood() {
            const value = await fetchFavFoodByUser({
                userId: parseInt(userId),
            });
            setFavFood(value);
        }

        getUserId();
        getFavFood();
    }, [userId, route]);

    const renderItem = ({ item }) => (
        <ListItem data={item} />
    );

    return (
        <View style={styles.container}>
            <LinearGradient
                colors={['#4364f7', '#fff', 'transparent']}
                style={styles.background}
            />
            <View style={styles.header}>
                <View style={{ top: 40, left: 8 }}>
                    <TouchableOpacity >
                        <Icon
                            name="menu-outline"
                            size={30}
                            color="#fff"
                            backgroundColor="#61b1fc"
                            onPress={() => navigation.openDrawer()}
                        />
                    </TouchableOpacity>
                </View>


            </View>

            <View style={styles.content}>
                <View>
                    {
                        favfood.length > 0 ? <FlatList
                            data={favfood}
                            renderItem={renderItem}
                            keyExtractor={item => item.id.toString()}
                        /> : <View style={styles.item}>
                            <Text style={{ fontSize: 30, color: '#333' }}>No Data Show</Text>
                        </View>
                    }
                </View>

            </View>

        </View>
    )


}

export default List;

const styles = StyleSheet.create({

    background: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: 650,
    },

    container: {
        flex: 1,
        backgroundColor: '#4364f7',

    },

    item: {
        marginBottom: 40,
        padding: 10,
        flex: 2,
        justifyContent: "center",
        alignItems: "center",
    },

    // header: {


    // },

    content: {
        flex: 2,
        top: 70,

    },



})