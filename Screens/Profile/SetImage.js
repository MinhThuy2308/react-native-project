import React, {useState, useEffect }from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  Button,
  TouchableOpacity,
  Dimensions,
  Modal,
  ImageBackground,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import * as ImagePicker from 'expo-image-picker';

import Icon from 'react-native-vector-icons/Ionicons';




const SetImage = (props) => {

  


  const closeModal = (bool, data) => {
    props.changeModal(bool);
    props.setData(data);
  }
  return (
    <View style={styles.container}>
      
      <View style={[styles.modal, { width: Width - 20, height: Height / 2.4 }]}>
        <Text style={{ fontSize: 28, textAlign: 'center', marginTop:10 }}>Upload Avatar</Text>
        <Text style={{ fontSize: 15, textAlign: 'center', color:'#929292' }}>Choose your profile picture</Text>

        <View style={styles.button}>
        <TouchableOpacity style={styles.click}>
            <Text style={{ color: '#fff' }} onPress={takeImage}>Take Photo</Text>
          </TouchableOpacity>
        <TouchableOpacity style={styles.click} onPress={pickImage}>
            <Text style={{ color: '#fff' }}>Choose from library</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.click} onPress={() => closeModal(false, 'Cancel')}>
            <Text style={{ color: '#fff' }}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )

}

export default SetImage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',

  },

  modal: {
    borderRadius: 10,
    shadowRadius: 10,
    backgroundColor: 'white',

  },

  button: {
    alignItems:'center',
    marginTop:10
  },

  click: { 
      marginTop:20,
      backgroundColor:'#1995ad',
      borderRadius:5,
      width: '90%',
      alignItems:'center',
      padding:10
      
  }
  
})