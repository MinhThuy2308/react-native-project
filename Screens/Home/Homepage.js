import React from 'react';
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

import { Data } from './data/data'

import Carouse from './Carouse'

const Homepage = ({ navigation }) => {
  return (
    <Carouse data={Data} />
  )
}

export default Homepage;

//  const styles = StyleSheet.create({
//      container: { 
//          marginTop:20,

//      }
//  })