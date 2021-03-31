import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import * as Animatable from 'react-native-animatable';

const Workout = ({ data }) => {
    return (
        <>
            <View style={styles.item} >
                <View>
                    <Text style={styles.title}>{data.title}</Text>
                    <Image
                        source={{ uri: `http://10.0.2.2:1337/uploads/thumbnail_workout_c395e55456.jpg` }}
                        style={styles.bg}

                    />
                </View>

            </View>

            <Animatable.View style={styles.desc} animation="fadeInUpBig">
                <Text style={styles.text}>{data.body}</Text>
            </Animatable.View>

        </>
    )
}

export default Workout;

const styles = StyleSheet.create({
    item: {

        marginTop: 20,
    },
    title: {
        fontSize: 20,
        marginLeft: 10,
    },

    bg: {
        width: 380,
        height: 250,
        marginLeft: 15,
        marginTop: 10

    },

    desc: {
        marginTop: 20,
        backgroundColor: '#a1d6e2',
        borderWidth: 1,
        borderRadius: 10,
        borderStyle: 'dashed',
        width: '90%',
        marginLeft: 20,
        marginTop: 10,
        padding: 10,

    },

    text: {
        color: '#00293c',
        lineHeight: 20,
        fontSize: 16,
    }

})