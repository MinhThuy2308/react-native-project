import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    ImageBackground
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import * as Animatable from 'react-native-animatable';

const MenuItem = ({ data }) => {
    return (
        <>
            <View style={styles.container}>
                <TouchableOpacity
                    style={styles.link}
                >
                    <View style={styles.item}>
                        <ImageBackground
                            source={{ uri: `http://10.0.2.2:1337${data.image.url}` }}
                            style={styles.bg}
                            imageStyle={{ borderRadius: 10 }}
                            resizeMode="center"
                        />
                        <Text style={styles.text}>{data.title}</Text>
                    </View>
                </TouchableOpacity>

            </View>
        </>
    )
}

export default MenuItem;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },

    bg: {
        width: 170,
        height: 170,
        padding:4,

    },

    item: {
        borderRadius: 10,
        marginBottom: 25,
        backgroundColor: '#fff',
        elevation: 10
    },

    text: {
        fontSize: 17,
        color: '#000',
        textAlign: 'center',
        padding: 8,
    },

    link: {
        flexDirection: 'row',
        paddingTop: 10,
    }
})