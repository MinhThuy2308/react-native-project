import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  ImageBackground,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import checkImage from '../../../utils/checkImage';

const DayItem = ({ data, activity }) => {
  const navigation = useNavigation();

  return (
    <ScrollView>
    <View style={styles.container}>
      <View style={styles.list}>
        <ImageBackground
          source={{ uri: checkImage(data.image, "medium") }}
          style={styles.bg}
          imageStyle={{ borderRadius: 10 }}
        >
          <TouchableOpacity
            style={styles.link}
            onPress={() => navigation.navigate('ActivityDay', {
              activity: activity,
              category: data.id,
            })}
          >
            <Text style={styles.text}>{data.name}</Text>
          </TouchableOpacity>
        </ImageBackground>
      </View>
    </View>
    </ScrollView>
  )
}

export default DayItem;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },

  list: {
    marginTop: 25
  },

  bg: {
    width: 385,
    height: 100,
    resizeMode: "stretch",
  },

  text: {
    fontSize: 18,
    color: '#fff',
    fontWeight:'bold',
  },

  link: {
    // backgroundColor:'#fff',
    flexDirection: 'row',
    paddingTop: 40,
    paddingBottom: 35,
    justifyContent: 'center'

  }
})