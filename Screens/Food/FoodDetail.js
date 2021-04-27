import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  Alert,
  Dimensions,
  ScrollView
} from 'react-native';
import { addFavFoodByUser } from '../../services/menus';
import Icon from 'react-native-vector-icons/Ionicons';
import checkImage from '../../utils/checkImage';




const { width, height } = Dimensions.get("window")

function FoodDetail({ data, userId }) {
  const handleAdd = async (foodId, userId) => {
    await addFavFoodByUser({
      food: foodId,
      user: userId,
    }).then(res => {
      Alert.alert('Successful');
      // console.log('data', res)
    })
  }


  return (
    <>
        <View style={styles.item}>
          {
            data.image ? <ImageBackground
              source={{ uri: checkImage(data.image) }}
              style={styles.bg}
              imageStyle={{ borderRadius: 40 }}
              resizeMode="cover"
            /> : <View></View>
          }
          <ScrollView style={{ top: 10 }}>
            <Text style={styles.title}>{data.title}</Text>
            <Text style={styles.desc}>{data.desc}</Text>
          </ScrollView>

          <TouchableOpacity style={{ left: 150, top: 30 }} onPress={() => { handleAdd(data.id, userId) }}>
            <Icon
              name="heart"
              size={30}
              color='red'
            />
          </TouchableOpacity>

        </View>


    </>
  )
}

export default FoodDetail;

const styles = StyleSheet.create({

  bg: {
    width: width - 40,
    height: 320,

  },

  item: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    width: width - 40,
    height: height / 1.3,
    marginRight: 20,
    marginLeft: 10,
    borderRadius: 40,
    paddingVertical: 40,
    elevation: 10

  },

  title: {
    color: '#000',
    fontSize: 25,
    fontWeight: 'bold',
    paddingLeft: 20,
  },

  desc: {
    color: '#333',
    fontSize: 15,
    paddingTop: 5,
    paddingLeft: 20,
    paddingRight: 20,
    lineHeight: 23
  },


})