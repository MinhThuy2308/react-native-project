import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Dimensions,
  ScrollView
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Feather from 'react-native-vector-icons/Feather';
import checkImage from '../../../utils/checkImage';
import { LinearGradient } from 'expo-linear-gradient';

const { width, height } = Dimensions.get("window")

const ListActivity = ({ data }) => {
  const navigation = useNavigation();


  return (
    <>
    
      <View style={styles.card}>
        

        <TouchableOpacity style={styles.click} onPress={() => navigation.navigate('ActivityDayDetail', { documentId: data.id })}>
          <View style={styles.item}>
            {
              data.image ? <ImageBackground
                source={{ uri: checkImage(data.image) }}
                style={styles.bg}
                imageStyle={{ borderRadius: 10 }}
                resizeMode="cover"

              >
              </ImageBackground> : <View></View>
            }
            <View style={styles.textView}>
              <Text style={styles.text}>{data.title}</Text>
            </View>
          </View>
        </TouchableOpacity>

       
      </View>
      
    </>
  )
}

export default ListActivity;

const styles = StyleSheet.create({
  bg: {
    width: 400,
    height: 330,

  },

  textView: {
    alignItems: 'center'

  },

  

  card: {
    flex: 1,
    width: width - 40,
    height: height / 1.4,
    backgroundColor:'#fff',
    marginTop: 50,
    marginRight: 20,
    marginLeft: 10,
    borderRadius: 20,
    shadowColor:'#000',
    elevation: 5,
    bottom:30

  },

  // click: {
  //   marginTop: 15,
  //   marginLeft: 10,
  //   justifyContent: 'flex-start',
  //   flexDirection: 'row'
  //   // paddingTop: 43,
  //   // paddingBottom: 36,
  //   // backgroundColor:'#1995ad'

  // },

  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 490,
    borderRadius:20

  },

  text: {
    top: 20,
    color: '#000',
    fontSize: 18,
    fontWeight: 'bold'

  }
})