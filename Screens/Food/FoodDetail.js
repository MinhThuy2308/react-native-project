import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  Alert,
  Dimensions
} from 'react-native';
import { addFavFoodByUser } from '../../services/menus';
import Icon from 'react-native-vector-icons/Ionicons';
import checkImage from '../../utils/checkImage';
import { ScrollView } from 'react-native-gesture-handler';



const { width, height } = Dimensions.get("window")

function FoodDetail({ data, userId }) {

  // console.log('FoodDetail De', data.id);

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
      <View style={styles.card}>
        <View style={styles.item}>
          {
            data.image ? <ImageBackground
              source={{ uri: checkImage(data.image) }}
              style={styles.bg}
              imageStyle={{ borderRadius: 15 }}
              resizeMode="cover"
            /> : <View></View>
          }
          <ScrollView>
            <View style={{ padding: 10 }}>
              <Text style={styles.title}>{data.title}</Text>
              <Text style={styles.desc}>{data.desc}</Text>
            </View>
          </ScrollView>
        </View>
        <View>
          <TouchableOpacity onPress={() => { handleAdd(data.id, userId) }}>
            <Icon
              name="heart"
              size={30}
              color='red'
            />
          </TouchableOpacity>
        </View>
      </View>
    </>
  )
}

export default FoodDetail;

const styles = StyleSheet.create({

  bg: {
    width: width - 40,
    height: 340,

  },

  card: {
    flex: 1,
    width: width - 40,
    height: height / 1.3,
    backgroundColor: '#fff',
    marginTop: 10,
    marginRight: 20,
    marginLeft: 10,
    borderRadius: 15,
    elevation: 10,


  },

  item: {


  },

  title: {
    color: '#000',
    fontSize: 25,
    fontWeight: 'bold',
    top: 5,
    paddingLeft: 20
  },

  desc: {
    color: '#A4A4A4',
    fontSize: 15,
    fontWeight: 'bold',
    paddingTop: 5,
    paddingLeft: 20,
    lineHeight:23
  },


})