import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { useState } from 'react/cjs/react.development';
import DateTimePicker from '@react-native-community/datetimepicker';
import { TextInput } from 'react-native-gesture-handler';
import Material from 'react-native-vector-icons/MaterialCommunityIcons';
import background from './images/background.jpg'

const Activity = ({navigation}) => {

  return (
    <View style={styles.container}>
      <ImageBackground
        source={background}
        style={styles.bg}
        imageStyle={{ borderRadius: 10 }}
      >
        <TouchableOpacity style={styles.link}  onPress={() => navigation.navigate('Basic')} >
          <Text style={styles.text}>Basic Yoga</Text>
          <Material
            name="yoga"
            size={25}
            color="#fff"
          />
        </TouchableOpacity>
      </ImageBackground>

      <ImageBackground
        source={background}
        style={styles.bg}
        imageStyle={{ borderRadius: 10 }}
      >
        <TouchableOpacity style={styles.link} onPress={() => navigation.navigate('LoseWeight')}>
          <Text style={styles.text}>Lose Weight</Text>
          <Material
            name="yoga"
            size={25}
            color="#fff"
          />
        </TouchableOpacity>
      </ImageBackground>

      <ImageBackground
        source={background}
        style={styles.bg}
        imageStyle={{ borderRadius: 10 }}
      >
        <TouchableOpacity style={styles.link} onPress={() => navigation.navigate('GainWeight')}>
          <Text style={styles.text}>Gain Weight</Text>
          <Material
            name="yoga"
            size={25}
            color="#fff"
          />
        </TouchableOpacity>
      </ImageBackground>

      <ImageBackground
        source={background}
        style={styles.bg}
        imageStyle={{ borderRadius: 10 }}
      >
        <TouchableOpacity style={styles.link} onPress={() => navigation.navigate('Advanced')}>
          <Text style={styles.text}>Advanced Yoga</Text>
          <Material
            name="yoga"
            size={25}
            color="#fff"
          />
        </TouchableOpacity>
      </ImageBackground>



    </View>
  )

}

export default Activity;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',

  },

  bg: {
    width: 350,
    height: 70,
    resizeMode: "stretch",
    marginTop: 40,
  },

  text: {
    fontSize: 17, 
    color: '#fff',
    

  },

  link: {
    flexDirection: 'row',
    paddingTop: 24,
    paddingBottom: 20,
    justifyContent:'center'
    
  }
})