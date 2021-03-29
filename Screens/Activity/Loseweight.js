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
import background from './images/background.jpg';


const Loseweight = ({navigation}) => {

  return (
    <View style={styles.container}>
      <ImageBackground
        source={background}
        style={styles.bg}
        imageStyle={{ borderRadius: 10 }}
      >
        <TouchableOpacity style={styles.link}>
          <Text style={styles.text}>Day 1</Text>
        </TouchableOpacity>
      </ImageBackground>

      <ImageBackground
        source={background}
        style={styles.bg}
        imageStyle={{ borderRadius: 10 }}
      >
        <TouchableOpacity style={styles.link}>
          <Text style={styles.text}>Day 2</Text>
        </TouchableOpacity>
      </ImageBackground>

      <ImageBackground
        source={background}
        style={styles.bg}
        imageStyle={{ borderRadius: 10 }}
      >
        <TouchableOpacity style={styles.link}>
          <Text style={styles.text}>Day 3</Text>
        </TouchableOpacity>
      </ImageBackground>

      <ImageBackground
        source={background}
        style={styles.bg}
        imageStyle={{ borderRadius: 10 }}
      >
        <TouchableOpacity style={styles.link}>
          <Text style={styles.text}>Day 4</Text>
        </TouchableOpacity>
      </ImageBackground>

      <ImageBackground
        source={background}
        style={styles.bg}
        imageStyle={{ borderRadius: 10 }}
      >
        <TouchableOpacity style={styles.link}>
          <Text style={styles.text}>Day 5</Text>
        </TouchableOpacity>
      </ImageBackground>

      <ImageBackground
        source={background}
        style={styles.bg}
        imageStyle={{ borderRadius: 10 }}
      >
        <TouchableOpacity style={styles.link}>
          <Text style={styles.text}>Day 6</Text>
        </TouchableOpacity>
      </ImageBackground>



    </View>
  )

}

export default Loseweight;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',

  },

  bg: {
    width: 350,
    height: 50,
    resizeMode: "stretch",
    marginTop: 30,
  },

  text: {
    fontSize: 17, 
    color: '#fff',
    

  },

  link: {
    flexDirection: 'row',
    paddingTop: 14,
    paddingBottom: 13,
    justifyContent:'center'
    
  }
})