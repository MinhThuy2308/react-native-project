import AsyncStorage from '@react-native-community/async-storage';
import { setStatusBarNetworkActivityIndicatorVisible } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  View,
  SafeAreaView,
  Text,
  Image,
  ScrollView,
  Dimensions,
  TouchableOpacity
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import { BMIAnalysis } from './BMIAnalysisAlert';
import Icon from 'react-native-vector-icons/Ionicons';
import { LinearGradient } from 'expo-linear-gradient';

const ResultBMI = ({ navigation }) => {
  const [userBMI, setUserBMI] = React.useState('');

  useEffect(() => {
    async function getUserBMIData() {
      const value = await AsyncStorage.getItem('userBMI');
      setUserBMI(value);
    }
    getUserBMIData();
  }, []);

  const changetextColor = () => {
    if (userBMI < 18.5) {
      return '#40639A';
    } else if (userBMI < 25) {
      return '#2CD42E';
    } else if (userBMI < 30) {
      return '#DEDE00';
    } else if (userBMI < 35) {
      return '#FFA722';
    } else {
      return '#FF0D00';
    }
  }


  const analysis = BMIAnalysis(userBMI);

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#4364f7', '#fff', 'transparent']}
        style={styles.background}
      />
      {
        userBMI ? (
          <Animatable.View style={styles.result} animation="fadeInDownBig">
            <View style={{flexDirection:'row'}}>
              <Text style={{ color: '#333', fontSize: 20, marginTop: 10 }}>Your BMI: </Text>
              <Text style={{ color: changetextColor(userBMI), fontSize: 20, marginTop: 10 }}>{userBMI} </Text>
            </View>
            <View style={styles.title}>
              <Text style={{ fontSize: 25, marginTop: 5, fontWeight: 'bold' }}>{analysis.title}</Text>
            </View>
            <View style={{padding:5}}>
              <Text style={{ color: '#737473', fontSize: 17, marginLeft: 10 }}>{analysis.desc} </Text>
            </View>
            <View style={{padding:5}}>
              <Text style={{ color: 'red', fontSize: 17, marginLeft: 10}}>Tips: {analysis.tips} </Text>
            </View>
          </Animatable.View>
        ) : (
          <Text>:(</Text>
        )
      }

      <View style={styles.inform} >
        <Animatable.View animation="fadeInDownBig">
          <Text style={{ color: '#737473', fontSize: 17, marginTop: 10 }}>Click the button below to go to our workouts</Text>
        </Animatable.View>
        <Animatable.View animation="flipInY">
          <View style={styles.button}>
            {/* <LinearGradient
        colors={['#4364f7', '#fff', 'transparent']}
        style={styles.background}
      > */}
            <TouchableOpacity animation="flipInY" style={styles.confirm} onPress={() => navigation.navigate('Activity')}>

              <Text style={{ color: '#4364f7', fontWeight: 'bold', paddingLeft: 10 }}>Next</Text>
              <Icon
                name="arrow-forward"
                size={20}
                color="#4364f7"
              />
            </TouchableOpacity>
            {/* </LinearGradient> */}
          </View>

        </Animatable.View>
      </View>
    </View>
  )
}

export default ResultBMI;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4364f7',
    alignItems: 'center',
    justifyContent: 'center',
  },

  result: {
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop:'2%',
    paddingBottom:'5%',
    borderRadius: 10,
    borderWidth: 2,
    width: '90%',

  },

  confirm: {
    flexDirection: 'row',
    marginTop: 15,
    backgroundColor: '#fff',
    borderRadius: 10,
    width: '30%',
    marginLeft: '35%',
    paddingBottom: 10,
    paddingTop: 10,
    paddingLeft: 20,
    paddingRight: 10,

  },

  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 700,
  },

})