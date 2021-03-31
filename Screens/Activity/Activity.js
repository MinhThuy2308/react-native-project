import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
  Dimensions,
  FlatList
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { TextInput } from 'react-native-gesture-handler';
import Material from 'react-native-vector-icons/MaterialCommunityIcons';
import background from './images/background.jpg';
import { useNavigation } from '@react-navigation/native';
import ActivityDetail from './Day/ActivityDetail';
import { fetchActivity } from '../../services/activity';

const renderItem = ({ item }) => (
  <ActivityDetail data={item} />
);

const Activity = ({data}) => {
  const navigation = useNavigation();
  const [activity, SetActivity] = useState([]);

  useEffect(() => {
    async function getActivity() {
      const res = await fetchActivity({
        activity: 1,
        category: 1,
      });
      SetActivity(res);
    }

    getActivity();
  }, []);

  useEffect(() => {
    navigation.setOptions({
      title: activity.title,
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <FlatList
        data={activity}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  )

}

export default Activity;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',

  },

  bg: {
    width: 350,
    height: 70,
    resizeMode: "stretch",
    marginTop: 40,
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