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
import ListActivity from './ListActivity';
import Icon from 'react-native-vector-icons/Ionicons';


const ActivityDay = ({ navigation, route }) => {
  const [day, SetDay] = useState([]);

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

  const renderItem = ({ item }) => (
    <ListActivity data={item} />
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
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
          pagingEnabled
          horizontal
          scrollEnabled
          snapToAlignment="center"
          scrollEventThrottle={16}
          decelerationRate={"fast"}
          showsHorizontalScrollIndicator={false}
          style={{ bottom: 150 }}
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

  header: {
    height: 230,
    backgroundColor: '#4364f7',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },

  title: {
    color: '#fff',
    fontSize: 28,
    fontWeight: 'bold',
    top: 50,
    paddingLeft: 20
  },

  footer: {
    alignItems: 'center',
    marginLeft: 10,
    top: 10,

  },
})