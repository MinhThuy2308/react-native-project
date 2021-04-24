import React, { useState} from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Alert
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import * as Animatable from 'react-native-animatable';
import { fetchDeleteNote } from '../../../services/appointment';
import { useNavigation } from '@react-navigation/native';

const NoteItem = ({ data }) => {
    const navigation = useNavigation();
    
    const handleDelete = async () => { 
        const res = await fetchDeleteNote({
            noteId: data.id,
        }).then(res => {
            Alert.alert('Delete Successfully');
            navigation.reset({
                index: 0,
                routes: [{ name: 'Note' }],
            });
        })
    } 

    
    return (
        <>
            <View style={styles.item}>
                <View style={styles.box}>
                    <View>
                        <Text style={styles.title}>{data.title}</Text>
                        <Text style={styles.note}>{data.content}</Text>
                    </View>

                </View>
                <View style={{ flexDirection: 'row', left: 330 }}>
              

                    <View style={{left:30}}>
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

export default NoteItem;

const styles = StyleSheet.create({

    title: {
        fontSize: 25,
        marginLeft: 10,
        color: 'red'
    },

    note: {
        fontSize: 18,
        marginLeft: 10,
        marginTop: 20
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