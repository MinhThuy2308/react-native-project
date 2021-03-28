import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  Button,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { useState } from 'react/cjs/react.development';
import DateTimePicker from '@react-native-community/datetimepicker';
import { TextInput } from 'react-native-gesture-handler';
import Feather from 'react-native-vector-icons/Feather';

const Activity = (props) => {

  return (
    <View style={styles.container}>
      <Text style={styles.intro}>Enter your index here: </Text>
    </View>
  )

}

export default Activity;

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },

    intro: {
        fontSize:25,
        marginLeft:20,
    },

    input: {
        borderBottomWidth:2,
        width:'80%',
        

    },
  
})