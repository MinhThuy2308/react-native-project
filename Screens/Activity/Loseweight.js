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
  <DayItem data={item} activity={2} />
);

const Loseweight = ({ navigation }) => {
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
          <View style={{bottom:30}}>
            <Text style={styles.title}>Lose Weight</Text>
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

export default Loseweight;

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

  header: {
    flex:1,
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
    flex:2,
    alignItems: 'center',
    bottom:80,

  },
})