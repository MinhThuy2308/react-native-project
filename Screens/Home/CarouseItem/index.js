import React from 'react';
import {
    StyleSheet,
    View,
    SafeAreaView,
    Text,
    Image,
    Button,
    Dimensions
} from 'react-native';

const { width, height } = Dimensions.get("window")

const CarouseItem = ({ item }) => {

    return (
        <>
            <View style={styles.container}>
                <Image style={styles.image} source={{ uri: item.url }} />
                <View style={styles.textView}>
                    <Text style={styles.title}> {item.title}</Text>
                    <Text style={styles.des}>{item.description}</Text>

                </View>
            </View>
        </>

    )
}

export default CarouseItem;

const styles = StyleSheet.create({
    container: {
     flex:1,
     width: width - 20,
     height: height / 3,
     backgroundColor:'white',
     margin:10,
     borderRadius:10,
     shadowColor:'#000',
     shadowOffset: {width:0.5, height:0.5},
     shadowOpacity:0.5,
     shadowRadius:0.5,
     elevation:5,

    },

    textView: {
        position:'absolute',
        bottom:10,
        margin:10,
        left:3
    },

    image: {
     width: width - 20,
     height:height / 3,
     borderRadius:10,

    },

    title: {
        color:'white',
        fontSize:22,
        shadowColor: '#000',
        shadowOffset: {width: 0.8, height: 0.8},
        shadowOpacity:1,
        shadowRadius:3,
        marginBottom:5,
        fontWeight:'bold',
        elevation:5,
    },

    des:{
        color:'white',
        fontSize:12,
        shadowColor: '#000',
        shadowOffset: {width: 0.8, height: 0.8},
        shadowOpacity:1,
        shadowRadius:3,
        marginBottom:5,
        elevation:5,
        
    }


})