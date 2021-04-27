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
import { useNavigation } from '@react-navigation/native';

const ActivityDetail = ({ data }) => {
  const navigation = useNavigation();

  const getActivityScreens = {
    1: 'ActivityBasicYoga',
    2: 'ActivityLoseWeight',
    3: 'ActivityGainWeight',
    4: 'ActivityAdvancedYoga',
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.link}
        onPress={() => navigation.navigate(getActivityScreens[data.id], {
          activity: data.id,
        })}
      >
        <View style={styles.item}>
          <ImageBackground
            source={{ uri: `http://10.0.2.2:1337${data.image.url}` }}
            style={styles.bg}
            imageStyle={{ borderRadius: 10 }}
          />
          <Text style={styles.text}>{data.title}</Text>
        </View>
      </TouchableOpacity>
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
    width: 150,
    height: 150,
    resizeMode: "stretch",

  },

  item: {
    borderRadius: 10,
    marginBottom: 25,
    backgroundColor: '#fff',
    elevation: 10
  },

  text: {
    fontSize: 17,
    color: '#000',
    textAlign: 'center',
    padding: 8,
  },

  link: {
    flexDirection: 'row',
    paddingTop: 10,
  }
})