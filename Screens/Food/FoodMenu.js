import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Alert
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { fetchFoodByMenu } from '../../services/menus';
import { LinearGradient } from 'expo-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';
import checkImage from '../../utils/checkImage';
import FoodDetail from './FoodDetail';
import Awesome from 'react-native-vector-icons/FontAwesome'

function FoodMenu({ navigation, route }) {
  const [data, SetData] = useState([]);
  const [userId, setUserId] = React.useState('');

  useEffect(() => {
    async function getUserBMIData() {
      const userId = await AsyncStorage.getItem('userId');
      setUserId(userId);
    }
    getUserBMIData();
  }, []);

  useEffect(() => {
    async function getFoodMenu() {
      const res = await fetchFoodByMenu({
        menuId: route.params.menuId,
      });
      SetData(res);
    }

    getFoodMenu();
  }, [route]);



  const renderItem = ({ item }) => {
    return (
      <FoodDetail data={item} userId={userId} />
    )
  }

  return (
    <>
      <View style={styles.container}>
        <View style={styles.header}>
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

          <View style={styles.list}>

            <TouchableOpacity style={styles.roundButton1} onPress={() => navigation.navigate('List')}>
              <Awesome
                name="list-alt"
                size={30}
                color='#fff'
              />
            </TouchableOpacity>

          </View>

        </View>
        <View style={styles.footer}>
          <Text>{data.title}</Text>
          <FlatList
            pagingEnabled
            scrollEnabled
            snapToAlignment="center"
            scrollEventThrottle={16}
            decelerationRate={"fast"}
            showsHorizontalScrollIndicator={false}
            horizontal
            data={data}
            renderItem={renderItem}
            keyExtractor={item => item.id.toString()}
          />
        </View>
      </View>
    </>
  )
}

export default FoodMenu;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  bg: {
    width: '80%',
    height: '80%',
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
    width: '90%',

  },

  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 700,
  },

  header: {
    backgroundColor: '#4364f7',
    height: 230,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,

  },

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
    // flex: 2,
    // backgroundColor: '#4364f7',
    alignItems: 'center',
    marginLeft: 10,
    bottom: 140,
    borderTopLeftRadius: 40,

  },

  roundButton1: {
    width: 70,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',


  },

  list: {
    // flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'flex-start',
    bottom: 10,


  },
})