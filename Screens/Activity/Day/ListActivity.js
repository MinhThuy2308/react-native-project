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
import checkImage from '../../../utils/checkImage';

const ListActivity = ({ data }) => {
  const navigation = useNavigation();

  return (
    <View>
      <View style={{ marginTop: 20 }}>
        <ImageBackground
          source={{ uri: checkImage(data.image, "thumbnail") }}
          style={styles.bg}
          imageStyle={{ borderRadius: 10 }}
        >
          <TouchableOpacity style={styles.click} onPress={() => navigation.navigate('Detail', { documentId: 1 })}>
            <Text style={styles.text}>{data.title}</Text>
          </TouchableOpacity>
        </ImageBackground>
      </View>
    </View>
  )
}

export default ListActivity;

const styles = StyleSheet.create({
  bg: {
    width: 385,
    height: 100,
    resizeMode: "stretch",
    
  },

  click: {
    paddingTop: 43,
    paddingBottom: 36,
    backgroundColor:'#1995ad'
 
  },

  text: {
    // color: '#fff',
    fontSize: 18,
    textAlign:'center',
  }
})