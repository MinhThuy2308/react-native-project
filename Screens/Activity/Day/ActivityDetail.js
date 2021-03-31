import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { useState } from 'react/cjs/react.development';
import DateTimePicker from '@react-native-community/datetimepicker';
import { TextInput } from 'react-native-gesture-handler';
import Material from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';
const ActivityDetail = ({ data }) => {

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <ImageBackground
        source={{ uri: `http://10.0.2.2:1337${data.image.formats.medium.url}` }}
        style={styles.bg}
        imageStyle={{ borderRadius: 10 }}
      >
        <TouchableOpacity
          style={styles.link}
          onPress={() => navigation.navigate('Basic', {
            activity: 1,
              category: 1,
          })}
        >
          <Text style={styles.text}>{data.title}</Text>
          <Material
            name="yoga"
            size={25}
            color="#fff"
          />
        </TouchableOpacity>
      </ImageBackground>



    </View>
  )

}

export default ActivityDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',

  },

  bg: {
    width: 385,
    height: 100,
    resizeMode: "stretch",
    marginTop: 40,
  },

  text: {
    fontSize: 17,
    color: '#fff',


  },

  link: {
    flexDirection: 'row',
    paddingTop: 40,
    paddingBottom: 35,
    justifyContent: 'center'

  }
})