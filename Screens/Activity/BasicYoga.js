import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Alert,
  TouchableOpacity
} from 'react-native';
import { fetchDay } from '../../services/days';
import DayItem from './Day/DateItem';
import Icon from 'react-native-vector-icons/Ionicons';

const renderItem = ({ item }) => (
  <DayItem data={item} activity={1} />
);

const BasicYoga = ({ navigation }) => {
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
      <View style={styles.header}>
        <View style={{ top: 40, left: 8 }}>
          <TouchableOpacity style={{ width: 40 }} >
            <Icon
              name="chevron-back-outline"
              size={35}
              color="#fff"
              backgroundColor="#61b1fc"
              onPress={() => navigation.goBack()}
            />
          </TouchableOpacity>
          <View style={{ bottom: 30 }}>
            <Text style={styles.title}>Basic Yoga</Text>
          </View>
          <View style={{ borderWidth: 2, width: 150, borderColor: '#fff', left: 20, top: 30 }}></View>
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

export default BasicYoga;

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },

  header: {
    flex: 1,
    backgroundColor: '#4364f7',
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
  },

  title: {
    color: '#fff',
    fontSize: 28,
    fontWeight: 'bold',
    top: 50,
    paddingLeft: 20
  },

  footer: {
    flex: 2,
    alignItems: 'center',
    bottom: 80,

  },
})