import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  ImageBackground
} from 'react-native';
import { fetchActivityWithDay } from '../../../services/documents';
import { useNavigation } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import ListActivity from './ListActivity';

const ActivityDay = () => {
  const navigation = useNavigation();
  const route = useRoute();
  
  const [day, SetDay] = useState([]);

  console.log('route', route);

  useEffect(() => {
    async function getDay() {
      const res = await fetchActivityWithDay({
        activityId: 1,
        categoryId: 1,
      });
      SetDay(res);
    }

    getDay();
  }, []);

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
      <FlatList
        data={day}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  )
}

export default ActivityDay;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

})