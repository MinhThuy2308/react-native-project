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
  ViewPagerAndroid
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { TextInput } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import ActivityDetail from './Day/ActivityDetail';
import { fetchActivity } from '../../services/activity';
import { LinearGradient } from 'expo-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';
import background from './images/background7.jpg'

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

  // useEffect(() => {
  //   async function getActivity() {
  //     const res = await fetchActivity();
  //     SetActivity(res);
  //   }

  //   getActivity();
  // }, []);

  useEffect(() => {
    navigation.setOptions({
      title: activity.title,
    });
  }, [navigation]);

  const numColumns = 2

  return (
    <ImageBackground
    source={background}
    resizeMode="cover"
    style={{height:300, flex:1, borderBottomRightRadius:10}}
    >
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
        </View>
       
      </View>
      <View style={{ bottom: 10 }}>
          <Text style={styles.title}>Yoga Workout</Text>
          
        </View>
      <View style={styles.footer}>
      <LinearGradient
          colors={['#61b1fc', '#4364f7', 'transparent']}
          style={styles.background}
        />
          <FlatList
            numColumns={numColumns}
            data={activity}
            renderItem={renderItem}
            keyExtractor={item => item.id.toString()}
          />
        </View>
    </View>
    </ImageBackground>
  )

}

export default Activity;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#61b1fc'

  },

  bg: {
    width: 200,
    height: 200,
    resizeMode: "stretch",
    marginTop: 60,
  },

  // background: {
  //   position: 'absolute',
  //   left: 0,
  //   right: 0,
  //   top: 0,
  //   height: 700,
  // },

  header: {
    flex:1
    // position: 'absolute',
    // left: 0,
    // right: 0,
    // top: 0,
    // height: 700,
  },

  title: {
    color: '#fff',
    fontSize: 28,
    fontWeight: 'bold',
    top:40,
    paddingLeft: 20
  },

  footer: {
    // flex: 1,
    // backgroundColor: '#4364f7',

    marginTop: 60,
    borderTopLeftRadius: 40,
    paddingVertical: 40,
    // paddingHorizontal: 30,

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