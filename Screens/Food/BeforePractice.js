import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  FlatList
} from 'react-native';
import { fetchFoodDetail } from '../../services/menus';
import { LinearGradient } from 'expo-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';
import checkImage from '../../utils/checkImage';
import FoodDetail from './FoodDetail';

function BeforePractice({ navigation, route }) {
  const [food, SetFoodDetail] = useState([]);

  useEffect(() => {
    async function getFoodDetail() {
      const res = await fetchFoodDetail({
        foodId: route.params.foodId,
      });
      SetFoodDetail(res);
      console.log('test', food)
    }

    getFoodDetail();
  }, [route]);

  const renderItem = ({ item }) => (
    <FoodDetail data={item} menu={1} />
  );

  return (
    <>
     <View style={styles.container}>
      <View style={styles.header}>
        <LinearGradient
          colors={['#4364f7', '#617EFF', 'transparent']}
          style={styles.background}
        />
        <View style={{ top: 40, left: 8 }}>
          <TouchableOpacity style={{ width: 40 }}>
            <Icon
              name="chevron-back-outline"
              size={35}
              color="#fff"
              onPress={() => navigation.goBack()}
            />
          </TouchableOpacity>
        </View>

      </View>
      <View style={styles.footer}>
        <FlatList
          data={food}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
        />
      </View>
    </View>
    </>
  )
}

export default BeforePractice;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  bg: {
    width: 120,
    height: 120,
    resizeMode: "stretch",

  },

  card: {
    marginTop: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    
  
  },

  item: {
    flex: 2,
    flexDirection: 'row',
    width:'90%',
    
  },

  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 700,
  },

  // header: {
  //   flex:1
  //   // position: 'absolute',
  //   // left: 0,
  //   // right: 0,
  //   // top: 0,
  //   // height: 700,
  // },

  title: {
    color: '#000',
    fontSize: 28,
    fontWeight: 'bold',
    top: 10,
    paddingLeft: 20
  },

  desc: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
    top: 10,
    paddingLeft: 20
  },

  footer: {
    flex: 2,
    // backgroundColor: '#4364f7',
    alignItems: 'center',
    marginTop: 20,
    borderTopLeftRadius: 40,
    paddingVertical: 40,
    // paddingHorizontal: 30,

  },
})