import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  TouchableOpacity,
  Text
} from 'react-native';
import { fetchDay } from '../../services/days';
import DayItem from './Day/DateItem';
import { LinearGradient } from 'expo-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';

const renderItem = ({ item }) => (
  <DayItem data={item} activity={3} />
);

const Gainweight = ({navigation}) => {
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
        <LinearGradient
          colors={['#4364f7', '#fff', 'transparent']}
          style={styles.background}
        />
        <View style={{ top: 40, left: 8 }}>
          <TouchableOpacity >
            <Icon
              name="chevron-back-outline"
              size={30}
              color="#fff"
              backgroundColor="#61b1fc"
              onPress={() => navigation.goBack()}
            />
          </TouchableOpacity>
        </View>

      </View>

      <View>
        <Text style={styles.title}>Workout</Text>
      </View>
      <View style={{borderWidth:2, width:150, borderColor:'#fff', left:20, top:60}}></View>
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

export default Gainweight;

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