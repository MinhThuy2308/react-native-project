import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  View,
  FlatList,
} from 'react-native';
import { fetchDay } from '../../services/days';
import DayItem from './Day/DateItem';

const renderItem = ({ item }) => (
  <DayItem data={item} activity={2} />
);

const Loseweight = ({navigation}) => {
  const [day, SetDay] = useState([]);

  useEffect(() => {
    async function getDay() {
        const res = await fetchDay();
        SetDay(res);
    }

    getDay();
  }, []);

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

export default Loseweight;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
})