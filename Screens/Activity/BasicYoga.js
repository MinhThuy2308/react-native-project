import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  View,
  FlatList,
} from 'react-native';
import { fetchDay } from '../../services/days';
import DayItem from './Day/DateItem';

const renderItem = ({ item }) => (
  <DayItem data={item} activity={1} />
);

const BasicYoga = ({navigation}) => {
  const [day, SetDay] = useState([]);

  useEffect(() => {
    async function getDay() {
      const res = await fetchDay();
      SetDay(res);
    }

    getDay();
  }, []);

  console.log('BasicYoga');

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

export default BasicYoga;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
})