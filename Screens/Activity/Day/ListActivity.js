import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  ImageBackground,
  TouchableOpacity
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Feather from 'react-native-vector-icons/Feather';
import checkImage from '../../../utils/checkImage';

const ListActivity = ({ data }) => {
  const navigation = useNavigation();

  return (
    <View>
      <View style={styles.card}>
        <View style={styles.item}>
        {
            data.image ?<ImageBackground
            source={{ uri: checkImage(data.image) }}
            style={styles.bg}
            imageStyle={{ borderRadius: 10 }}
           
          >
           
          </ImageBackground>: <View></View>
          }
          <TouchableOpacity style={styles.click} onPress={() => navigation.navigate('ActivityDayDetail', { documentId: data.id })}>
            <Text style={styles.text}>{data.title}</Text>
            {/* <Feather
            name="chevron-right"
            size={25}
            color="#000"
            style={{ top: 2 }}
          /> */}
          </TouchableOpacity>
        </View>
        <View style={{ flex: 1 }}>
         
          
        </View>
      </View>
    </View>
  )
}

export default ListActivity;

const styles = StyleSheet.create({
  bg: {
    width: 130,
    height: 120,
   
  },

  card: {
    marginTop: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
  
  },

  item: { 
    flex:2, 
    flexDirection:'row',
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

  text: {
    top:20,
    color: '#000',
    fontSize: 18,
    fontWeight:'bold'

  }
})