import React from 'react';
import {
    StyleSheet,
    View,
    SafeAreaView,
    Text,
    Image,
    Button,
    Dimensions,
    TouchableOpacity,
    ImageBackground
} from 'react-native';
import checkImage from '../../../utils/checkImage';
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get("window")

const CarouseItem = ({ item }) => {
    const navigation = useNavigation();
    const getActivityScreens = {
        1: 'ActivityBasicYoga',
        2: 'ActivityAdvancedYoga',
        3: 'ActivityLoseWeight',
        4: 'Menu',
    }

    return (
        <>
            <View style={styles.container}>

                <TouchableOpacity
                    style={styles.link}
                    onPress={() => navigation.navigate(getActivityScreens[item.id], {
                        activity: item.id,
                    })}
                >
                    {/* <View style={styles.item}>
                        <ImageBackground
                            source={{ uri: checkImage(data.image, "large")}}
                            style={styles.bg}
                            imageStyle={{ borderRadius: 10 }}
                            resizeMode="cover"
                        />
                        
                        <View style={styles.textView}>
                            <Text style={styles.text}>{data.title}</Text>
                            <Text style={styles.desc}>{data.description}</Text>
                        </View>

                    </View> */}

                    <View style={styles.item}>
                        <ImageBackground 
                         style={styles.bg} 
                         source={{ uri: item.url }} 
                         imageStyle={{ borderRadius: 10 }}
                         resizeMode="cover" />
                        <View style={styles.textView}>
                            <Text style={styles.text}> {item.title}</Text>
                            <Text style={styles.desc}>{item.description}</Text>

                        </View>
                    </View>
                </TouchableOpacity>

            </View>

        </>

    )
}

export default CarouseItem;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: width - 40,
        height: height / 1.5,
        backgroundColor: 'white',
        marginTop: 10,
        marginRight: 20,
        marginLeft: 20,
        borderRadius: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0.5, height: 0.5 },
        shadowOpacity: 0.5,
        shadowRadius: 0.5,
        elevation: 5,

    },

    textView: {
        position: 'absolute',
        bottom: 10,
        marginTop: 10,
        marginLeft: 10,
        left: 3,
    },

    image: {
        // width: width - 20,
        // height: height / 3,

        width: '100%',
        height: '100%',
        borderRadius: 10,
        backgroundColor: '#fff'

    },

    text: {
        color: '#000',
        fontSize: 25,
        shadowColor: '#000',
        shadowOffset: { width: 0.8, height: 0.8 },
        shadowOpacity: 1,
        shadowRadius: 3,
        marginBottom: 5,
        fontWeight: 'bold',
        elevation: 5,
    },

    desc: {
        color: '#000',
        fontSize: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0.8, height: 0.8 },
        shadowOpacity: 1,
        shadowRadius: 3,
        marginBottom: 5,
        elevation: 5,

    },

    bg: {
        width: '100%',
        height: '100%',
    },


})