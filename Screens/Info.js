import React, { useEffect, useState } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity,
    Alert,
    Keyboard,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { TextInput } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-community/async-storage';
import { LinearGradient } from 'expo-linear-gradient';
import { updateUserById } from '../services/users';

const Info = ({ navigation }) => {
    const [data, setData] = React.useState({
        weight: '',
        height: '',
        check_textInputChange: false,
    });

    const [userId, setUserId] = React.useState('');

    useEffect(() => {
        async function getUserBMIData() {
            const userId = await AsyncStorage.getItem('userId');
            setUserId(userId);
        }
        getUserBMIData();
    }, []);

    const inputWeightChange = (val) => {
        if (val.length >= 0) {
            setData({
                ...data,
                weight: val,
                check_textInputChange: true,
            });
        } else {
            setData({
                ...data,
                weight: val,
                check_textInputChange: false,
            });
        }
    }

    const inputHeightChange = (val) => {
        if (val.length >= 0) {
            setData({
                ...data,
                height: val,
                check_textInputChange: true,
            });
        } else {
            setData({
                ...data,
                height: val,
                check_textInputChange: false,
            });

        }
    }

    const calcIndexBMI = async (weight, height) => {

        if (weight < 20 || weight > 300) {
            Alert.alert('Wrong input', `Weight is invalid ${weight} kg`, [
                { text: 'OK' }
            ]);
            return;
        }

        if (height > 220) {
            Alert.alert('Wrong input', `Height is invalid ${height} cm`, [
                { text: 'OK' }
            ]);
            return;
        }

        let BMI = 0;
        BMI = weight / (height * height);
        const calcBMI = (BMI * 10000).toFixed(2);

        await updateUserById({
            userId: userId,
            bmi: calcBMI,
        });

        await AsyncStorage.setItem('userBMI', calcBMI.toString());

        Keyboard.dismiss();

        navigation.navigate('Result')
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <LinearGradient
                    colors={['#4364f7', '#fff', 'transparent']}
                    style={styles.background}
                />
                <View style={{ top: 40, left: 8 }}>
                    <TouchableOpacity >
                        <Icon
                            name="menu-outline"
                            size={35}
                            color="#fff"
                            backgroundColor="#61b1fc"
                            onPress={() => navigation.openDrawer()}
                        />
                    </TouchableOpacity>
                </View>

            </View>
            <View style={styles.footer}>
                <View style={styles.form}>
                    <Text style={styles.intro}>Let's calculate your BMI: </Text>
                    <View style={styles.action}>

                        <TextInput
                            placeholder="Weight"
                            style={styles.textInput}
                            autoCapitalize="none"
                            onChangeText={(val) => inputWeightChange(val)}
                            keyboardType={"number-pad"}
                        >
                        </TextInput>
                    </View>

                    <View style={styles.action}>
                        <TextInput
                            placeholder="Height"
                            style={styles.textInput}
                            autoCapitalize="none"
                            onChangeText={(val) => inputHeightChange(val)}
                            keyboardType={"number-pad"}
                        >
                        </TextInput>
                    </View>
                    <View style={styles.button}>
                        <LinearGradient
                            colors={['#4364f7', '#6fb1fc']}
                            style={{ borderRadius: 10 }}
                        >
                            <TouchableOpacity style={styles.confirm} onPress={() => calcIndexBMI(data.weight, data.height)} >
                                <Text style={styles.textSign}>Calculate</Text>
                            </TouchableOpacity>
                        </LinearGradient>
                    </View>

                </View>
            </View>

        </View>
    )
}

export default Info;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    action: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 30,
        borderRadius: 20,
        borderBottomWidth: 2,
        borderBottomColor: '#4364f7',
        paddingBottom: 5,
        paddingTop: 5,
        paddingLeft: 10,
    },

    intro: {
        fontSize: 27,
        color: '#fff',
        textAlign: 'center',
    },

    confirm: {
        borderRadius: 10,

    },

    button: {
        marginTop: 30,
        width: '95%',
        marginLeft: 10
    },

    textSign: {
        fontSize: 18,
        borderRadius: 10,
        color: '#fff',
        fontWeight: 'bold',
        paddingTop: 10,
        paddingBottom: 10,
        textAlign: 'center',
    },

    textInput: {
        paddingLeft: 5,
        width: '77%'
    },

    background: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: 700,
    },

    title: {
        color: '#fff',
        fontSize: 28,
        fontWeight: 'bold',
        top: 50,
        paddingLeft: 20
    },

    footer: {
        flex: 2,
        top: 100,
        borderTopLeftRadius: 40,

    },
})