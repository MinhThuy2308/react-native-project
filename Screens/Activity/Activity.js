import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
  Dimensions,
  FlatList,
  ScrollView
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ActivityDetail from './Day/ActivityDetail';
import { fetchActivity } from '../../services/activity';
import Icon from 'react-native-vector-icons/Ionicons';


const renderItem = ({ item }) => (
  <ActivityDetail data={item} />
);

const Activity = ({ data }) => {
  const navigation = useNavigation();
  const [activity, SetActivity] = useState([]);

  React.useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      // Screen was focused
      // Do something
      async function getActivity() {
        const res = await fetchActivity();
        SetActivity(res);
      }

      getActivity();
    });

    return unsubscribe;
  }, [navigation]);

  useEffect(() => {
    navigation.setOptions({
      title: activity.title,
    });
  }, [navigation]);

  const numColumns = 2

  return (

    <View style={styles.container}>
      <View style={styles.header}>
        <View style={{ top: 40, left: 8 }}>
          <TouchableOpacity style={{ width: 40 }} >
            <Icon
              name="menu-outline"
              size={35}
              color="#fff"
              backgroundColor="#61b1fc"
              onPress={() => navigation.openDrawer()}
            />
          </TouchableOpacity>
          <View style={{ bottom: 30 }}>
            <Text style={styles.title}>Yoga Workout</Text>
          </View>
        </View>
      </View>
      <View style={styles.footer}>
        <FlatList
          numColumns={numColumns}
          data={activity}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
        />
      </View>

    </View>
  )

}

export default Activity;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'

  },

  bg: {
    width: 200,
    height: 200,
    resizeMode: "stretch",
    marginTop: 60,
  },

  header: {
    backgroundColor: '#4364f7',
    flex: 1,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,

  },

  title: {
    color: '#fff',
    fontSize: 28,
    fontWeight: 'bold',
    top: 40,
    paddingLeft: 20
  },

  footer: {
    bottom: 80,
  },

  text: {
    fontSize: 17,
    color: '#fff',

  },

  link: {
    flexDirection: 'row',
    paddingTop: 24,
    paddingBottom: 20,
    justifyContent: 'center'

  }
})