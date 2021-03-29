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

const ResultBMI = ({ navigation }) => {
  const [userBMI, setUserBMI] = React.useState();

  useEffect(() => {
    async function getUserBMIData() {
      const value = await AsyncStorage.getItem('userBMI');
      setUserBMI(value);
    }
    getUserBMIData();
  }, []);

  const analysis = BMIAnalysis(userBMI);

  return (
    <View style={styles.container}>
      {
        userBMI && (
          <Animatable.View style={styles.result} animation="fadeInDownBig">
            <View style={styles.index}>
              <Text style={{ color: '#333', fontSize: 20, marginTop: 10 }}>Your BMI: {userBMI} </Text>
            </View>
            <View style={styles.title}>
              <Text style={{ color: 'red', fontSize: 25, marginTop: 8, fontWeight: 'bold' }}>{analysis.title}</Text>
            </View>
            <View style={styles.desc}>
              <Text style={{ color: '#737473', fontSize: 17, marginLeft: 10, marginTop: 10 }}>{analysis.desc} </Text>
            </View>

          </Animatable.View>


        )
      }

      <View style={styles.inform} >
        <Animatable.View animation="fadeInDownBig">
          <Text style={{ color: '#fff', fontSize: 17, marginTop: 10 }}>Click the button below to go to our workouts</Text>
        </Animatable.View>
        <Animatable.View animation="flipInY">
          <TouchableOpacity animation="flipInY" style={styles.confirm}>
            <Text style={{ color: '#1995ad', fontWeight: 'bold', paddingLeft: 10 }}>Next</Text>
            <Icon
              name="arrow-forward"
              size={20}
              color="#1995ad"
            />
          </TouchableOpacity>
        </Animatable.View>
      </View>
    </View>
  )
}

export default ResultBMI;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1995ad',
    alignItems: 'center',
    justifyContent: 'center',
  },

  result: {
    backgroundColor: '#fff',
    alignItems: 'center',
    width: '90%',
    height: '30%',
    borderRadius: 10,
    borderWidth: 2

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

  }

})