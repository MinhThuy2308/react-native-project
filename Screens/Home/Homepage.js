import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  SafeAreaView,
  Text,
  Image,
  ScrollView,
  Dimensions,
  Button,
  FlatList,
  TouchableOpacity,

} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import Icon from 'react-native-vector-icons/Ionicons';
import { Data } from './data/data'
import Carouse from './Carouse';
import { LinearGradient } from 'expo-linear-gradient';
import minCover from '../../assets/images/logo3.jpg';
import CarouseItem from './CarouseItem/index';
import { fetchImage } from '../../services/homepage'

const Homepage = ({ navigation }) => {
  const [userBMI, setUserBMI] = useState('');
  const [image, setImage] = useState([]);

  useEffect(() => {
    async function getImage() {
      const res = await fetchImage();
      setImage(res);
    }
    console.log('image', image)
    getImage();
  }, []);

  useEffect(() => {
    async function getUserBMIData() {
      const value = await AsyncStorage.getItem('userBMI');
      setUserBMI(value);
    }
    getUserBMIData();
  }, []);

  useEffect(() => {
    if (userBMI === 'USER_NEW_REGISTER') {
      navigation.navigate('Information')
    }
  }, [userBMI]);

  const [useName, setUserName] = useState([]);

  useEffect(() => {
    async function retrieveData() {
      const useName = await AsyncStorage.getItem('userName');
      setUserName(useName);
    }
    retrieveData();
  }, []);

  const renderItem = ({ item }) => (
    <CarouseItem data={item} />
  );

  return (

    <View style={styles.container} >
      <View style={styles.header}>
        <LinearGradient
          colors={['#4364f7', '#fff', 'transparent']}
          style={styles.background}
        />
        <View style={{ top: 40, left: 8 }}>
          <TouchableOpacity >
            <Icon
              name="menu-outline"
              size={30}
              color="#fff"
              backgroundColor="#61b1fc"
              onPress={() => navigation.openDrawer()}
            />
          </TouchableOpacity>
        </View>
        <View style={{ bottom: 10, left:20 }}>
          <Text style={styles.title}>Hello, {useName}</Text>
          <Text style={styles.subtitle}>Choose the one that matches your needs</Text>
        </View>

      </View>

      <View style={styles.footer}>
        {/* <LinearGradient
          colors={['#61b1fc', '#4364f7', 'transparent']}
          style={styles.background}
        /> */}
        <FlatList
          horizontal={true}
          pagingEnabled={true}
          data={image}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
        />
      </View>
    </View>
  )
}

export default Homepage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor:'#fff',
    // backgroundColor: '#61b1fc',

  },

  // header: {
  //   flex: 1,
  //   backgroundColor: '#4364f7',

  // },

  intro: {
    top: 30
  },

  text: {
    fontSize: 23,
    color: '#fff',
    fontWeight: 'bold',
    marginLeft: 20
  },

  desc: {
    fontSize: 15,
    color: '#333',
    marginLeft: 15,
    marginTop: 10
  },

  item: {
    alignItems: 'center',
    width: 380,
    height: 450,
    borderRadius: 15,
    marginLeft: 7,

  },

  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 550,

  },

  bgItem: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 460,
    borderRadius: 20

  },

  footer: {
    flex: 2,
    alignItems: 'center',

    marginLeft: 10,
    // backgroundColor: '#ffffff',
    // borderTopLeftRadius: 30,
    // borderTopRightRadius: 30,

  },

  title: {
    color: '#fff',
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 60,
    marginLeft: 10
  },

  subtitle: {
    color: '#fff',
    fontSize: 16,
    marginTop: 5,
    marginLeft: 10,
  },

})