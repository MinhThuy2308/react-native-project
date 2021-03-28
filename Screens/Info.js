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
import * as Animatable from 'react-native-animatable';
import AsyncStorage from '@react-native-community/async-storage';

const Info = ({ navigation }) => {
    const [data, setData] = React.useState({
        weight: '',
        height: '',
        check_textInputChange: false,
    });

    const [userBMI, setUserBMI] = React.useState();

    useEffect(() => {
        async function getUserBMIData() {
            const value = await AsyncStorage.getItem('userBMI');
            setUserBMI(value);
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

    const calcCalo = async (weight, height) => {

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

        await AsyncStorage.setItem('userBMI', calcBMI.toString());
        setUserBMI(calcBMI);

        Keyboard.dismiss();

        navigation.navigate('Result')
    }

    return (
        <View style={styles.container}>
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


                <TouchableOpacity style={styles.confirm} onPress={() => calcCalo(data.weight, data.height)} >
                    <Text style={styles.textSign}>Calculate</Text>
                </TouchableOpacity>

            </View>

            {
                userBMI && (
                    <View style={styles.userBMI}>
                        <Text>Your BMI is {userBMI}</Text>
                    </View>
                )
            }



        </View>
    )
}

export default Info;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1995ad',
    },

    form: {
        alignItems: 'center',
        justifyContent: 'center',
        top: '15%',
    },

    userBMI: {
        top: '35%',
        alignItems: 'center',
        justifyContent: 'center',
    },

    action: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 15,
        backgroundColor: '#fff',
        borderRadius: 10,
        paddingBottom: 5,
        paddingTop: 5,
        width: '80%',
        paddingLeft: 10,
        marginTop: 20

    },

    intro: {
        fontSize: 27,
        color: '#fff',
        textAlign: 'center',
    },

    confirm: {
        top: '10%',
        backgroundColor: '#fff',
        width: '40%',
        paddingBottom: 5,
        paddingTop: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 15,
        borderRadius: 20,

    },

    textSign: {
        textAlign: 'center',
        color: '#4cb5f5',
        fontSize: 18,
        fontWeight: 'bold',
    },

    textInput: {
        paddingTop: 5,
        paddingBottom: 5,
        width: '80%',
        marginLeft: 5,
    }

})