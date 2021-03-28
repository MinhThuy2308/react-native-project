import React from 'react';
import {
    StyleSheet,
    View,
    Text,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import * as Animatable from 'react-native-animatable';

const MenuItem = ({ data }) => {
    return (
        <>
            <View style={styles.link} >
                <Icon
                    name="restaurant"
                    color="#4d648d"
                    size={22}
                />
                <Text style={styles.title}>{data.title}</Text>
            </View>
            <Animatable.View style={styles.des} animation="fadeInUpBig">
                <Text style={styles.text}>{data.description}</Text>
            </Animatable.View>
        </>
    )
}

export default MenuItem;

const styles = StyleSheet.create({
    link: {
        flexDirection: 'row',
        left: 20,
        marginTop:20,
    },
    title: {
        fontSize: 20,
        marginLeft: 10,
    },

    des: {    
        backgroundColor:'#a1d6e2',    
        borderWidth:1,
        borderRadius:10,
        borderStyle:'dashed',
        width:'90%',
        marginLeft:20,
        marginTop:10,
        padding:10,
        
    },

    text: {
        color:'#00293c',
        lineHeight:30,
        fontSize: 17,
    }
})