import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  ImageBackground,
  TouchableOpacity
} from 'react-native';
import { fetchActivityWithDay } from '../../../services/documents';
import { useNavigation } from '@react-navigation/native';
import ListActivity from './ListActivity';
import { useFocusEffect } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';


const ActivityDay = ({ navigation, route }) => {
  const [day, SetDay] = useState([]);

  // console.log('3. ActivityDay', route);

  // React.useEffect(() => {
  //   const unsubscribe = navigation.addListener('focus', () => {
  //     // Screen was focused
  //     // Do something
  //     async function getDay() {
  //       const res = await fetchActivityWithDay({
  //         activityId: route.params.activity,
  //         categoryId: route.params.categoryId,
  //       });
  //       SetDay(res);
  //     }

  //     getDay();
  // }, [route]);

  //   return unsubscribe;
  // }, [navigation]);

  useEffect(() => {
    async function getDay() {
      const res = await fetchActivityWithDay({
        activityId: route.params.activityId,
        categoryId: route.params.categoryId,
      });
      SetDay(res);
    }

    getDay();
  }, [route]);

  // useFocusEffect(
  //   React.useCallback(() => {
  //     async function unsubscribe() {
  //       const res = await fetchActivityWithDay({
  //         activityId: route.params.activity,
  //         categoryId: route.params.category,
  //       });
  //       SetDay(res);
  //     }

  //     return () => unsubscribe();
  //   }, [day])
  // );

  // useEffect(() => {
  //   async function getDay() {
  //     const res = await fetchActivityWithDay({
  //       activityId: route.params.activity,
  //       categoryId: route.params.category,
  //     });
  //     SetDay(res);
  //   }

  //   getDay();
  // }, []);

  // useEffect(() => {
  //   navigation.setOptions({
  //     title: 'List Yoga',
  //   });
  // }, [navigation]);

  const renderItem = ({ item }) => (
    <ListActivity data={item} />
  );

  return (
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
          data={day}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
        />
      </View>
    </View>
  )
}

export default ActivityDay;

const styles = StyleSheet.create({
  container: {
    flex: 1,

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
    color: '#fff',
    fontSize: 28,
    fontWeight: 'bold',
    top: 50,
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