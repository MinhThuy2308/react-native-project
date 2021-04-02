import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  SafeAreaView,
  Text,
  Image,
  ScrollView,
  Dimensions,
  Button,
  TouchableOpacity
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import { Data } from './data/data'
import Carouse from './Carouse'

const Homepage = ({ navigation }) => {
  const [userBMI, setUserBMI] = useState('');

  useEffect(() => {
    async function getUserBMIData() {
      const value = await AsyncStorage.getItem('userBMI');
      setUserBMI(value);
    }
    getUserBMIData();
  }, []);

  useEffect(() => {
    console.log('userBMI', userBMI);
    if(userBMI === 'USER_NEW_REGISTER') {
      navigation.navigate('Information')
    }
  }, [userBMI]);

  return (
    // <Carouse data={Data} />
    <View>
      <TouchableOpacity onPress={() => navigation.navigate('Information')}>
        <Text>Test</Text>
      </TouchableOpacity>

    </View>
  )
}

export default Homepage;

//  const styles = StyleSheet.create({
//      container: { 
//          marginTop:20,

//      }
//  })