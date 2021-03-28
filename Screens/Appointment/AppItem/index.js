import React from 'react';
import {
    StyleSheet,
    View,
    Text,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import * as Animatable from 'react-native-animatable';
import { TextInput } from 'react-native-gesture-handler';

const AppItem = ({ data }) => {
    return (
        <>
            <View style={styles.item}>
                <Icon
                    name="alarm"
                    color="#333"
                    size={35}
                    style={{top:35}}
                />
                <View style={styles.link}>
                    <TextInput style={styles.title}>{data.workout}</TextInput>
                </View>
                <View style={styles.alarm}>

                    <Text style={styles.date}>{data.datetime}</Text>
                </View>
                <View style={styles.desrow}>
                    <TextInput style={styles.text}>{data.description}</TextInput>
                </View>
            </View>
        </>
    )
}

export default AppItem;

const styles = StyleSheet.create({
    item: {
        flex: 1,
        borderBottomWidth: 1,
        width: '90%',
        marginLeft: 20,

    },
    link: {
        marginLeft:30,
        
    },
    title: {
        fontSize: 20,
        marginLeft: 10,
    },
    
    alarm: {
        marginLeft:30,
    },

    desrow: {
        marginLeft:30,
    },
    text: {
        color: '#00293c',
        lineHeight: 30,
        fontSize: 15,
        marginLeft: 10,
    },

    date: {
        color: '#00293c',
        lineHeight: 30,
        fontSize: 15,
        marginLeft: 10,
    }
})