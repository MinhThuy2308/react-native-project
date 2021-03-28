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
  Button
} from 'react-native';

import { BMIAnalysis } from './BMIAnalysisAlert';

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
          <View style={styles.result}>
            <Text style={{ color:'#fff'}}>{userBMI} Test</Text>
            <Text style={{ color:'#fff'}}>{analysis.desc} desc</Text>
            <Text style={{ color:'#fff'}}>{analysis.title} title</Text>
          </View>
        )
      }
    </View>
  )
}

export default ResultBMI;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1995ad',
    alignItems:'center', 
    justifyContent:'center',
  },
})